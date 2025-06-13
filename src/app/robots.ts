import { siteConfig } from '@/lib/config';

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
      // You can add disallow rules here for specific paths
      // disallow: '/private/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
