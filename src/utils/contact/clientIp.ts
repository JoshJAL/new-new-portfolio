const CLIENT_IP_HEADERS = ['x-vercel-forwarded-for', 'x-forwarded-for', 'x-real-ip'] as const;

export function getClientIp(requestHeaders: Headers): string | null {
  for (const header of CLIENT_IP_HEADERS) {
    const value = requestHeaders.get(header);
    const clientIp = value?.split(',', 1)[0].trim();

    if (clientIp) return clientIp;
  }

  return null;
}
