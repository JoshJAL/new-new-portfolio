import { sql } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const seekers = sqliteTable('seekers', {
  companyName: text().notNull(),
  createdAt: text()
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  email: text().notNull(),
  firstName: text().notNull(),
  id: int().primaryKey({ autoIncrement: true }).notNull(),
  lastName: text().notNull(),
  phoneNumber: text().notNull()
});
