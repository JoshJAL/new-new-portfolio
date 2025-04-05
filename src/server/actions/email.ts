'use server';

import ContactThankYou from '@/components/emails/ContactThankYou';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendThankYouEmail(email: string, firstName: string, lastName: string) {
  const { data, error } = await resend.emails.send({
    from: 'joshua.levine@contact.joshualevine.me',
    to: [email.trim().toLowerCase()],
    subject: 'Thank you for your message!',
    react: ContactThankYou({ firstName: firstName.trim(), lastName: lastName.trim() })
  });

  if (error) {
    console.error('Error sending email:', error);
    return null;
  }

  return data;
}
