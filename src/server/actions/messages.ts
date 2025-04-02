'use server';

import { db } from '@/db';
import { messages } from '@/db/schema/messages';
import { tryCatch } from '@/utils/tryCatch';

export async function createMessage(
  email: string,
  firstName: string,
  lastName: string,
  message: string,
  phoneNumber?: string
) {
  const { data, error } = await tryCatch(
    db
      .insert(messages)
      .values({
        email,
        firstName,
        lastName,
        message,
        phoneNumber: phoneNumber && phoneNumber.trim() !== '' ? phoneNumber : null
      })
      .returning()
  );

  if (error) {
    console.error('Error creating message: ', error.message);
    return null;
  }

  return data[0].id;
}
