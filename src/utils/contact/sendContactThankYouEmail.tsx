import 'server-only';

import ContactThankYou from '@/components/emails/ContactThankYou';

import { SERVER_ENVIRONMENT } from '@/utils/serverEnvironment';
import { Resend } from 'resend';

import type { ContactSubmission } from '@/types/contact';

export async function sendContactThankYouEmail(submission: ContactSubmission): Promise<void> {
  const resend = new Resend(SERVER_ENVIRONMENT.resendApiKey);
  const { error } = await resend.emails.send({
    from: 'joshua.levine@contact.joshualevine.me',
    to: [submission.email],
    subject: 'Thank you for your message!',
    react: ContactThankYou({ firstName: submission.firstName, lastName: submission.lastName })
  });

  if (error) throw new Error('Resend rejected the contact thank-you email', { cause: error });
}
