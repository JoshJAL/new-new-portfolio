import 'server-only';

import { lt, sql } from 'drizzle-orm';

import { db } from '@/utils/db/client';
import { contactRateLimits, messages } from '@/utils/db/schema';

import type { ContactSubmissionStore, ContactSubmissionTransaction } from './rateLimit';

export const contactSubmissionStore: ContactSubmissionStore = {
  async transaction<T>(callback: (transaction: ContactSubmissionTransaction) => Promise<T>): Promise<T> {
    return db.transaction(async (transaction) => {
      const contactTransaction: ContactSubmissionTransaction = {
        async deleteRateLimitBucketsBefore(timestamp) {
          await transaction.delete(contactRateLimits).where(lt(contactRateLimits.windowStart, timestamp));
        },
        async incrementRateLimitBucket({ key, windowStart }) {
          const [bucket] = await transaction
            .insert(contactRateLimits)
            .values({ count: 1, key, windowStart })
            .onConflictDoUpdate({
              target: [contactRateLimits.key, contactRateLimits.windowStart],
              set: { count: sql`${contactRateLimits.count} + 1` }
            })
            .returning({ count: contactRateLimits.count });

          if (!bucket) throw new Error('Rate-limit bucket increment returned no row');
          return bucket.count;
        },
        async insertMessage(message) {
          await transaction.insert(messages).values(message);
        }
      };

      return callback(contactTransaction);
    });
  }
};
