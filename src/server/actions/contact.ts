'use server';

import { getClientIp } from '@/utils/contact/clientIp';
import { contactSchema } from '@/utils/contact/contactSchema';
import { headers } from 'next/headers';

import type { ContactSubmissionInput, SubmitContactResult } from '@/types/contact';

// This action is intentionally public; validation, a honeypot, and durable throttling protect it.
export async function submitContact(values: ContactSubmissionInput): Promise<SubmitContactResult> {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return {
      code: 'invalid',
      message: 'Please check your entries and try again.',
      ok: false
    };
  }

  if (parsed.data.companyWebsite) return { ok: true };

  const [requestHeaders, { submitContactMessage }] = await Promise.all([
    headers(),
    import('@/utils/contact/submitContactMessage')
  ]);
  return submitContactMessage(parsed.data, getClientIp(requestHeaders));
}
