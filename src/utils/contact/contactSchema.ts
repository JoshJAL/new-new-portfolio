import { z } from 'zod';

import type { ContactFormValues } from '@/types/contact';

export const contactSchema = z.object({
  email: z.string().trim().toLowerCase().max(254, 'Email is too long').pipe(z.email('Invalid email address')),
  firstName: z.string().trim().min(1, 'First name is required').max(100, 'First name is too long'),
  lastName: z.string().trim().min(1, 'Last name is required').max(100, 'Last name is too long'),
  message: z.string().trim().min(1, 'Message is required').max(5000, 'Message is too long'),
  phoneNumber: z.string().trim().max(50, 'Phone number is too long')
}) satisfies z.ZodType<ContactFormValues>;
