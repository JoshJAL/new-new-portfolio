// Section tints mirror the @theme tokens in src/app/globals.css
export const SECTION_TINTS: ReadonlyArray<{ prefix: string; tint: string }> = [
  { prefix: '/projects', tint: '#247ba0' }, // cerulean
  { prefix: '/guides', tint: '#368f8b' }, // dark-cyan
  { prefix: '/packages', tint: '#70c1b3' }, // verdigris
  { prefix: '/blog', tint: '#246a73' }, // caribbean-current
  { prefix: '/about', tint: '#ddbea8' }, // desert-sand
  { prefix: '/contact', tint: '#f3dfc1' }, // champagne
  { prefix: '/thank-you', tint: '#ffe066' } // naples-yellow
];

// null = home/default: keep the seeded base mix untouched
export function getRouteTint(pathname: string): string | null {
  const match = SECTION_TINTS.find(({ prefix }) => pathname === prefix || pathname.startsWith(`${prefix}/`));
  return match ? match.tint : null;
}
