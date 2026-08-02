import 'server-only';

import { contactSubmissionStore } from './contactStore';
import { sendContactThankYouEmail } from './sendContactThankYouEmail';
import { processContactSubmission } from './submitContact';
import { SERVER_ENVIRONMENT } from '@/utils/serverEnvironment';

import type { ContactActionResult, ContactFormValues } from '@/types/contact';

export async function submitContactMessage(
  values: ContactFormValues,
  clientIp: string | null
): Promise<ContactActionResult> {
  return processContactSubmission(values, {
    clientIp,
    logError: console.error,
    now: Date.now(),
    rateLimitSecret: () => SERVER_ENVIRONMENT.contactRateLimitSecret,
    sendThankYouEmail: sendContactThankYouEmail,
    store: contactSubmissionStore
  });
}
