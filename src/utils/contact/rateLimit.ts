import { createHmac } from 'node:crypto';

import type { ContactFormValues } from '@/types/contact';

export const CONTACT_RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
export const CONTACT_RATE_LIMIT_RETENTION_MS = 24 * 60 * 60 * 1000;
export const CONTACT_EMAIL_LIMIT = 3;
export const CONTACT_IP_LIMIT = 5;

interface ContactMessage {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  phoneNumber: string | null;
}

interface RateLimitBucket {
  key: string;
  limit: number;
  windowStart: number;
}

interface IncrementRateLimitBucketInput {
  key: string;
  windowStart: number;
}

export interface ContactSubmissionTransaction {
  deleteRateLimitBucketsBefore(timestamp: number): Promise<void>;
  incrementRateLimitBucket(input: IncrementRateLimitBucketInput): Promise<number>;
  insertMessage(message: ContactMessage): Promise<void>;
}

export interface ContactSubmissionStore {
  transaction<T>(callback: (transaction: ContactSubmissionTransaction) => Promise<T>): Promise<T>;
}

type SaveContactSubmissionResult = { accepted: true } | { accepted: false; retryAfterSeconds: number };

class ContactRateLimitExceededError extends Error {
  constructor(readonly retryAfterSeconds: number) {
    super('Contact submission rate limit exceeded');
  }
}

function assertRateLimitSecret(secret: string): void {
  if (Buffer.byteLength(secret, 'utf8') < 32) {
    throw new Error('CONTACT_RATE_LIMIT_SECRET must contain at least 32 bytes');
  }
}

export function createRateLimitKey(kind: 'email' | 'ip', value: string, secret: string): string {
  assertRateLimitSecret(secret);

  const digest = createHmac('sha256', secret).update(`${kind}:${value}`).digest('hex');
  return `${kind}:${digest}`;
}

export function buildRateLimitBuckets(
  email: string,
  clientIp: string | null,
  now: number,
  secret: string
): RateLimitBucket[] {
  const windowStart = Math.floor(now / CONTACT_RATE_LIMIT_WINDOW_MS) * CONTACT_RATE_LIMIT_WINDOW_MS;
  const buckets: RateLimitBucket[] = [
    {
      key: createRateLimitKey('email', email, secret),
      limit: CONTACT_EMAIL_LIMIT,
      windowStart
    }
  ];

  if (clientIp) {
    buckets.push({
      key: createRateLimitKey('ip', clientIp, secret),
      limit: CONTACT_IP_LIMIT,
      windowStart
    });
  }

  return buckets;
}

export async function saveContactSubmission(
  store: ContactSubmissionStore,
  submission: ContactFormValues,
  clientIp: string | null,
  now: number,
  secret: string
): Promise<SaveContactSubmissionResult> {
  const buckets = buildRateLimitBuckets(submission.email, clientIp, now, secret);
  const message: ContactMessage = {
    email: submission.email,
    firstName: submission.firstName,
    lastName: submission.lastName,
    message: submission.message,
    phoneNumber: submission.phoneNumber || null
  };

  try {
    await store.transaction(async (transaction) => {
      const counts = await Promise.all(
        buckets.map(async (bucket) => ({
          bucket,
          count: await transaction.incrementRateLimitBucket(bucket)
        }))
      );
      const limitedBucket = counts.find(({ bucket, count }) => count > bucket.limit);

      if (limitedBucket) {
        const { bucket } = limitedBucket;
        const retryAfterSeconds = Math.max(
          1,
          Math.ceil((bucket.windowStart + CONTACT_RATE_LIMIT_WINDOW_MS - now) / 1000)
        );
        throw new ContactRateLimitExceededError(retryAfterSeconds);
      }

      await transaction.deleteRateLimitBucketsBefore(now - CONTACT_RATE_LIMIT_RETENTION_MS);
      await transaction.insertMessage(message);
    });

    return { accepted: true };
  } catch (error) {
    if (error instanceof ContactRateLimitExceededError) {
      return { accepted: false, retryAfterSeconds: error.retryAfterSeconds };
    }

    throw error;
  }
}
