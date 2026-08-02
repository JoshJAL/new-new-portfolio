import 'server-only';

type ServerEnvironmentKey = 'CONTACT_RATE_LIMIT_SECRET' | 'DATABASE_AUTH_TOKEN' | 'DATABASE_URL' | 'RESEND_API_KEY';

function getRequiredEnvironmentVariable(key: ServerEnvironmentKey): string {
  const value = process.env[key];

  if (!value) throw new Error(`Missing required environment variable: ${key}`);

  return value;
}

export const SERVER_ENVIRONMENT = {
  get contactRateLimitSecret(): string {
    return getRequiredEnvironmentVariable('CONTACT_RATE_LIMIT_SECRET');
  },
  get databaseAuthToken(): string {
    return getRequiredEnvironmentVariable('DATABASE_AUTH_TOKEN');
  },
  get databaseUrl(): string {
    return getRequiredEnvironmentVariable('DATABASE_URL');
  },
  get resendApiKey(): string {
    return getRequiredEnvironmentVariable('RESEND_API_KEY');
  }
};
