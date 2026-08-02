import { contactSchema } from './contactSchema';
import { saveContactSubmission } from './rateLimit';

import type { ContactSubmissionStore } from './rateLimit';
import type { ContactActionResult, ContactFormValues } from '@/types/contact';

interface ProcessContactSubmissionOptions {
  clientIp: string | null;
  logError: (message: string, error: unknown) => void;
  now: number;
  rateLimitSecret: () => string;
  sendThankYouEmail: (submission: ContactFormValues) => Promise<void>;
  store: ContactSubmissionStore;
}

const INVALID_RESULT: ContactActionResult = {
  message: 'Please check your entries and try again.',
  status: 'error'
};

const SERVER_ERROR_RESULT: ContactActionResult = {
  message: 'Something went wrong sending your message. Please try again.',
  status: 'error'
};

function hasPopulatedHoneypot(input: unknown): boolean {
  if (!input || typeof input !== 'object' || !('companyWebsite' in input)) return false;

  const companyWebsite = input.companyWebsite;
  return typeof companyWebsite === 'string' && companyWebsite.trim().length > 0;
}

export async function processContactSubmission(
  input: unknown,
  options: ProcessContactSubmissionOptions
): Promise<ContactActionResult> {
  if (hasPopulatedHoneypot(input)) return { status: 'success' };

  const parsed = contactSchema.safeParse(input);

  if (!parsed.success) return INVALID_RESULT;

  let saveResult: Awaited<ReturnType<typeof saveContactSubmission>>;

  try {
    saveResult = await saveContactSubmission(
      options.store,
      parsed.data,
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
      message: 'Too many messages have been sent. Please try again later.',
      status: 'error'
    };
  }

  try {
    await options.sendThankYouEmail(parsed.data);
  } catch (error) {
    options.logError('Error sending contact thank-you email:', error);
  }

  return { status: 'success' };
}
