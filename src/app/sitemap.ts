import fs from 'fs';
import path from 'path';

import { siteConfig } from '@/lib/config';

import type { MetadataRoute } from 'next';

export const runtime = 'nodejs';

// ... getImagesInDir function remains the same ...
const getImagesInDir = (dir: string): string[] => {
  const filesToIgnore = [
    'favicon.ico',
    'apple-icon.png',
    'icon.png',
    'opengraph-image.png',
    'opengraph-image.jpg',
    'twitter-image.png',
    'twitter-image.jpg'
  ];
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
  let images: string[] = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (filesToIgnore.includes(file)) continue;

    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      images = images.concat(getImagesInDir(filePath));
    } else if (imageExtensions.some((ext) => file.endsWith(ext))) {
      const urlPath = filePath.replace(path.join(process.cwd(), 'public'), '').replace(/\\/g, '/');
      images.push(`${siteConfig.url}${urlPath}`);
    }
  }
  return images;
};

// ... generateStaticRoutes function remains the same ...
const generateStaticRoutes = (dir: string): MetadataRoute.Sitemap => {
  const routes: MetadataRoute.Sitemap = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      !file.startsWith('(') &&
      !file.startsWith('_') &&
      !file.startsWith('@') &&
      file !== 'api'
    ) {
      routes.push(...generateStaticRoutes(filePath));
    }

    if (file === 'page.tsx' || file === 'page.js' || file === 'page.jsx' || file === 'page.mdx' || file === 'page.md') {
      const urlPath = dir.replace(path.join(process.cwd(), 'src', 'app'), '').replace(/\\/g, '/');

      routes.push({
        url: `${siteConfig.url}${urlPath || '/'}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
      });
    }
  }

  return routes;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'src', 'app');
  const staticRoutes = generateStaticRoutes(appDir);

  const publicDir = path.join(process.cwd(), 'public');
  const allContentImages = getImagesInDir(publicDir);

  // --- Match the URL with the trailing slash ---
  const rootRoute = staticRoutes.find((route) => route.url === `${siteConfig.url}/`);

  if (rootRoute) {
    rootRoute.priority = 1;
    rootRoute.changeFrequency = 'yearly';
    rootRoute.images = allContentImages;
  } else {
    console.error('Could not find root route to attach images!');
  }

  return staticRoutes;
}
