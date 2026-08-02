import { contactSchema } from './contactSchema';
import { describe, expect, it, mock } from 'bun:test';

import type { ContactSubmissionStore, ContactSubmissionTransaction } from './rateLimit';
import type { ContactSubmissionInput } from '@/types/contact';

mock.module('server-only', () => ({}));

const [{ CONTACT_RATE_LIMIT_WINDOW_MS, createRateLimitKey }, { processContactSubmission }] = await Promise.all([
  import('./rateLimit'),
  import('./submitContact')
]);

const NOW = Date.UTC(2026, 7, 2, 12, 15);
const RATE_LIMIT_SECRET = 'test-contact-rate-limit-secret-value';

const VALID_INPUT: ContactSubmissionInput = {
  companyWebsite: '',
  email: 'person@example.com',
  firstName: 'First',
  lastName: 'Last',
  message: 'Hello there',
  phoneNumber: ''
};

type StoredMessage = Parameters<ContactSubmissionTransaction['insertMessage']>[0];

interface StoredBucket {
  count: number;
  key: string;
  windowStart: number;
}

function createMemoryStore(): {
  buckets: () => StoredBucket[];
  messages: StoredMessage[];
  store: ContactSubmissionStore;
} {
  let buckets = new Map<string, StoredBucket>();
  const messages: StoredMessage[] = [];

  const store: ContactSubmissionStore = {
    async transaction<T>(callback: (transaction: ContactSubmissionTransaction) => Promise<T>): Promise<T> {
      const nextBuckets = new Map(Array.from(buckets, ([key, bucket]) => [key, { ...bucket }]));
      const nextMessages = messages.map((message) => ({ ...message }));
      const result = await callback({
        async deleteRateLimitBucketsBefore(timestamp) {
          for (const [key, bucket] of nextBuckets) {
            if (bucket.windowStart < timestamp) nextBuckets.delete(key);
          }
        },
        async incrementRateLimitBucket({ key, windowStart }) {
          const bucketId = `${key}:${windowStart}`;
          const existing = nextBuckets.get(bucketId);
          const count = (existing?.count ?? 0) + 1;

          nextBuckets.set(bucketId, { count, key, windowStart });
          return count;
        },
        async insertMessage(message) {
          nextMessages.push(message);
        }
      });

      buckets = nextBuckets;
      messages.splice(0, messages.length, ...nextMessages);
      return result;
    }
  };

  return { buckets: () => Array.from(buckets.values()), messages, store };
}

function createHarness() {
  const memory = createMemoryStore();
  const emailSubmissions: StoredMessage[] = [];
  const errors: { error: unknown; message: string }[] = [];
  let emailShouldFail = false;

  return {
    ...memory,
    emailSubmissions,
    errors,
    setEmailShouldFail(value: boolean) {
      emailShouldFail = value;
    },
    submit(input: unknown, clientIp: string | null = '203.0.113.10', now = NOW) {
      return processContactSubmission(input, {
        clientIp,
        logError: (message, error) => errors.push({ error, message }),
        now,
        rateLimitSecret: () => RATE_LIMIT_SECRET,
        sendThankYouEmail: async (submission) => {
          if (emailShouldFail) throw new Error('Resend unavailable');

          emailSubmissions.push(submission);
        },
        store: memory.store
      });
    }
  };
}

describe('contact validation', () => {
  it('trims and normalizes valid values', () => {
    expect(
      contactSchema.parse({
        companyWebsite: '   ',
        email: '  Person@Example.COM ',
        firstName: '  First ',
        lastName: ' Last  ',
        message: '  Hello there  ',
        phoneNumber: '   '
      })
    ).toEqual({
      companyWebsite: '',
      email: 'person@example.com',
      firstName: 'First',
      lastName: 'Last',
      message: 'Hello there',
      phoneNumber: null
    });
  });

  it('rejects invalid, empty, and oversized values', () => {
    const invalidInputs: ContactSubmissionInput[] = [
      { ...VALID_INPUT, email: 'not-an-email' },
      { ...VALID_INPUT, firstName: ' ' },
      { ...VALID_INPUT, lastName: ' ' },
      { ...VALID_INPUT, message: ' ' },
      { ...VALID_INPUT, email: `${'a'.repeat(250)}@example.com` },
      { ...VALID_INPUT, firstName: 'a'.repeat(81) },
      { ...VALID_INPUT, lastName: 'a'.repeat(81) },
      { ...VALID_INPUT, message: 'a'.repeat(5001) },
      { ...VALID_INPUT, phoneNumber: '1'.repeat(33) },
      { ...VALID_INPUT, companyWebsite: 'a'.repeat(201) }
    ];

    for (const input of invalidInputs) expect(contactSchema.safeParse(input).success).toBe(false);
  });

  it('rejects invalid direct calls without side effects', async () => {
    const harness = createHarness();
    const result = await harness.submit({ email: 'invalid' });

    expect(result).toEqual({
      code: 'invalid',
      message: 'Please check your entries and try again.',
      ok: false
    });
    expect(harness.messages).toHaveLength(0);
    expect(harness.emailSubmissions).toHaveLength(0);
  });
});

describe('contact submission protections', () => {
  it('treats a populated honeypot as synthetic success without side effects', async () => {
    const harness = createHarness();
    const result = await harness.submit({ ...VALID_INPUT, companyWebsite: 'https://spam.example' });

    expect(result).toEqual({ ok: true });
    expect(harness.messages).toHaveLength(0);
    expect(harness.buckets()).toHaveLength(0);
    expect(harness.emailSubmissions).toHaveLength(0);
  });

  it('rejects the fourth submission for one email in an hour', async () => {
    const harness = createHarness();

    for (let index = 0; index < 3; index += 1) {
      expect(await harness.submit(VALID_INPUT, null)).toEqual({ ok: true });
    }

    expect(await harness.submit(VALID_INPUT, null)).toMatchObject({ code: 'rate_limited', ok: false });
    expect(harness.messages).toHaveLength(3);
  });

  it('rejects the sixth submission from one IP even with different emails', async () => {
    const harness = createHarness();

    for (let index = 0; index < 5; index += 1) {
      const input = { ...VALID_INPUT, email: `person-${index}@example.com` };
      expect(await harness.submit(input)).toEqual({ ok: true });
    }

    const limitedEmail = 'person-5@example.com';
    expect(await harness.submit({ ...VALID_INPUT, email: limitedEmail })).toMatchObject({
      code: 'rate_limited',
      ok: false
    });
    expect(harness.messages).toHaveLength(5);
    expect(
      harness.buckets().some((bucket) => bucket.key === createRateLimitKey('email', limitedEmail, RATE_LIMIT_SECRET))
    ).toBe(false);
  });

  it('resets limits in the next hourly bucket', async () => {
    const harness = createHarness();

    for (let index = 0; index < 3; index += 1) await harness.submit(VALID_INPUT, null);

    expect(await harness.submit(VALID_INPUT, null)).toMatchObject({ code: 'rate_limited', ok: false });
    expect(await harness.submit(VALID_INPUT, null, NOW + CONTACT_RATE_LIMIT_WINDOW_MS)).toEqual({
      ok: true
    });
    expect(harness.messages).toHaveLength(4);
  });

  it('still enforces the email limit when no client IP is available', async () => {
    const harness = createHarness();

    for (let index = 0; index < 3; index += 1) await harness.submit(VALID_INPUT, null);

    expect(await harness.submit(VALID_INPUT, null)).toMatchObject({ code: 'rate_limited', ok: false });
    expect(harness.buckets()).toHaveLength(1);
  });

  it('never includes raw identifiers in durable rate-limit keys', () => {
    const email = 'person@example.com';
    const clientIp = '203.0.113.10';
    const emailKey = createRateLimitKey('email', email, RATE_LIMIT_SECRET);
    const ipKey = createRateLimitKey('ip', clientIp, RATE_LIMIT_SECRET);

    expect(emailKey).not.toContain(email);
    expect(ipKey).not.toContain(clientIp);
    expect(emailKey).toMatch(/^email:[a-f0-9]{64}$/);
    expect(ipKey).toMatch(/^ip:[a-f0-9]{64}$/);
  });

  it('rolls back bucket increments and message inserts for limited requests', async () => {
    const harness = createHarness();

    for (let index = 0; index < 3; index += 1) await harness.submit(VALID_INPUT, null);

    const before = harness.buckets();
    await harness.submit(VALID_INPUT, null);

    expect(harness.messages).toHaveLength(3);
    expect(harness.buckets()).toEqual(before);
  });

  it('keeps the message and returns success when email delivery fails', async () => {
    const harness = createHarness();
    harness.setEmailShouldFail(true);

    expect(await harness.submit(VALID_INPUT)).toEqual({ ok: true });
    expect(harness.messages).toHaveLength(1);
    expect(harness.errors).toHaveLength(1);
    expect(harness.errors[0].message).toBe('Error sending contact thank-you email:');
  });
});
