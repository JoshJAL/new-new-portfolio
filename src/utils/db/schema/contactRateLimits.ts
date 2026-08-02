import { int, primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const contactRateLimits = sqliteTable(
  'contact_rate_limits',
  {
    count: int().notNull(),
    key: text().notNull(),
    windowStart: int().notNull()
  },
  (table) => [primaryKey({ columns: [table.key, table.windowStart] })]
);
