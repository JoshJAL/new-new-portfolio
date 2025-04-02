import type { Config } from 'drizzle-kit';

import dotenv from 'dotenv';

dotenv.config({
  path: '.env.local'
});

export default {
  schema: './src/db/schema',
  out: './drizzle',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
    authToken: process.env.DATABASE_AUTH_TOKEN as string
  },
  verbose: true,
  strict: true
} satisfies Config;
