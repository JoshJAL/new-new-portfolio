import 'server-only';

import * as schema from './schema';

import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { SERVER_ENVIRONMENT } from '@/utils/serverEnvironment';

const client = createClient({
  authToken: SERVER_ENVIRONMENT.databaseAuthToken,
  url: SERVER_ENVIRONMENT.databaseUrl
});

export const db = drizzle(client, { schema });
