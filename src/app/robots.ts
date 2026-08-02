import { SITE_CONFIG } from '@/utils/siteConfig';

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: '/',
      disallow: '/thank-you',
      userAgent: '*'
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`
  };
}
