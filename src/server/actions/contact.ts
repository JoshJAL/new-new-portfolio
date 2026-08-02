'use server';

import { headers } from 'next/headers';

import { getClientIp } from '@/utils/contact/clientIp';
import { contactSchema } from '@/utils/contact/contactSchema';
import { submitContactMessage } from '@/utils/contact/submitContactMessage';

import type { ContactActionResult, ContactFormValues } from '@/types/contact';

const INVALID_CONTACT_RESULT: ContactActionResult = {
  message: 'Please check your entries and try again.',
  status: 'error'
};

export async function submitContact(values: ContactFormValues): Promise<ContactActionResult> {
  const companyWebsite = (values as ContactFormValues & { companyWebsite?: unknown }).companyWebsite;

  if (typeof companyWebsite === 'string' && companyWebsite.trim()) return { status: 'success' };

  const result = contactSchema.safeParse(values);

  if (!result.success) return INVALID_CONTACT_RESULT;

  const requestHeaders = await headers();
  return submitContactMessage(result.data, getClientIp(requestHeaders));
}
