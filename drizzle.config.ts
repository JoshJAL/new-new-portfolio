import type { Config } from 'drizzle-kit';

import dotenv from 'dotenv';

dotenv.config({
  path: '.env.local'
});

const databaseUrl = process.env.DATABASE_URL;
const databaseAuthToken = process.env.DATABASE_AUTH_TOKEN;

if (!databaseUrl) throw new Error('Missing required environment variable: DATABASE_URL');
if (!databaseAuthToken) throw new Error('Missing required environment variable: DATABASE_AUTH_TOKEN');

export default {
  dbCredentials: {
    authToken: databaseAuthToken,
    url: databaseUrl
  },
  dialect: 'turso',
  out: './drizzle',
  schema: './src/utils/db/schema/index.ts',
  strict: true,
  verbose: true
} satisfies Config;
