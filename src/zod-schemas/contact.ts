import { z } from 'zod';

export const contactSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  message: z.string().min(1, 'Message is required'),
  phoneNumber: z.string()
});
