import 'server-only';

import { contactSchema } from './contactSchema';
import { saveContactSubmission } from './rateLimit';

import type { ContactSubmissionStore } from './rateLimit';
import type { ContactSubmission, SubmitContactResult } from '@/types/contact';

export interface ProcessContactSubmissionOptions {
  clientIp: string | null;
  logError: (message: string, error: unknown) => void;
  now: number;
  rateLimitSecret: () => string;
  sendThankYouEmail: (submission: ContactSubmission) => Promise<void>;
  store: ContactSubmissionStore;
}

const INVALID_RESULT: SubmitContactResult = {
  code: 'invalid',
  message: 'Please check your entries and try again.',
  ok: false
};

const SERVER_ERROR_RESULT: SubmitContactResult = {
  code: 'server_error',
  message: 'Something went wrong sending your message. Please try again.',
  ok: false
};

export async function processContactSubmission(
  input: unknown,
  options: ProcessContactSubmissionOptions
): Promise<SubmitContactResult> {
  const parsed = contactSchema.safeParse(input);

  if (!parsed.success) return INVALID_RESULT;
  if (parsed.data.companyWebsite) return { ok: true };

  return processValidatedContactSubmission(parsed.data, options);
}

export async function processValidatedContactSubmission(
  submission: ContactSubmission,
  options: ProcessContactSubmissionOptions
): Promise<SubmitContactResult> {
  if (submission.companyWebsite) return { ok: true };

  let saveResult: Awaited<ReturnType<typeof saveContactSubmission>>;

  try {
    saveResult = await saveContactSubmission(
      options.store,
      submission,
      options.clientIp,
      options.now,
      options.rateLimitSecret()
    );
  } catch (error) {
    options.logError('Error saving contact submission:', error);
    return SERVER_ERROR_RESULT;
  }

  if (!saveResult.accepted) {
    return {
      code: 'rate_limited',
      message: 'Too many messages have been sent. Please try again later.',
      ok: false,
      retryAfterSeconds: saveResult.retryAfterSeconds
    };
  }

  try {
    await options.sendThankYouEmail(submission);
  } catch (error) {
    options.logError('Error sending contact thank-you email:', error);
  }

  return { ok: true };
}
