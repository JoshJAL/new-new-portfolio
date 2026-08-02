import { generateSitemap } from '@/utils/sitemap';

import type { MetadataRoute } from 'next';

export const runtime = 'nodejs';

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap();
}
