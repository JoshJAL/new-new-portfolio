import { z } from 'zod';

import type { ContactSubmission, ContactSubmissionInput } from '@/types/contact';

export const contactSchema: z.ZodType<ContactSubmission, ContactSubmissionInput> = z.object({
  companyWebsite: z.string().trim().max(200, 'Company website is too long'),
  email: z
    .string()
    .trim()
    .max(254, 'Email is too long')
    .pipe(z.email('Invalid email address'))
    .transform((email) => email.toLowerCase()),
  firstName: z.string().trim().min(1, 'First name is required').max(80, 'First name is too long'),
  lastName: z.string().trim().min(1, 'Last name is required').max(80, 'Last name is too long'),
  message: z.string().trim().min(1, 'Message is required').max(5000, 'Message is too long'),
  phoneNumber: z
    .string()
    .trim()
    .max(32, 'Phone number is too long')
    .transform((phoneNumber) => phoneNumber || null)
});
