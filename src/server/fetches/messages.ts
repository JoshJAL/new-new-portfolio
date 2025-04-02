import { db } from '@/db';
import { messages } from '@/db/schema/messages';
import { eq } from 'drizzle-orm';
import { tryCatch } from '@/utils/tryCatch';

import type { Message } from '@/types/message';

export async function getMessageById(id: number | string): Promise<Message | null> {
  id = Number(id);

  const { data, error } = await tryCatch(db.select().from(messages).where(eq(messages.id, id)));

  if (error) {
    console.error('Error fetching message:', error);
    return null;
  }

  return data[0];
}
