import 'server-only';

import { SERVER_ENVIRONMENT } from '@/utils/serverEnvironment';

import { contactSubmissionStore } from './contactStore';
import { sendContactThankYouEmail } from './sendContactThankYouEmail';
import { processValidatedContactSubmission } from './submitContact';

import type { ContactSubmission, SubmitContactResult } from '@/types/contact';

export async function submitContactMessage(
  values: ContactSubmission,
  clientIp: string | null
): Promise<SubmitContactResult> {
  return processValidatedContactSubmission(values, {
    clientIp,
    logError: console.error,
    now: Date.now(),
    rateLimitSecret: () => SERVER_ENVIRONMENT.contactRateLimitSecret,
    sendThankYouEmail: sendContactThankYouEmail,
    store: contactSubmissionStore
  });
}
