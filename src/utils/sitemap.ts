import fs from 'node:fs';
import path from 'node:path';

import { SITE_CONFIG } from './siteConfig';

import type { MetadataRoute } from 'next';

const IMAGE_EXTENSIONS = new Set(['.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp']);
const METADATA_IMAGE_FILES = new Set([
  'apple-icon.jpeg',
  'apple-icon.jpg',
  'apple-icon.png',
  'favicon.ico',
  'icon.jpeg',
  'icon.jpg',
  'icon.png',
  'opengraph-image.jpeg',
  'opengraph-image.jpg',
  'opengraph-image.png',
  'twitter-image.jpeg',
  'twitter-image.jpg',
  'twitter-image.png'
]);
const PAGE_FILES = new Set(['page.js', 'page.jsx', 'page.md', 'page.mdx', 'page.tsx']);
const EXCLUDED_ROUTES = new Set(['/thank-you']);

function getImagesInDirectory(directory: string, publicDirectory: string): string[] {
  const images: string[] = [];

  for (const file of fs.readdirSync(directory)) {
    if (METADATA_IMAGE_FILES.has(file)) continue;

    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      images.push(...getImagesInDirectory(filePath, publicDirectory));
    } else if (IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase())) {
      const urlPath = filePath.replace(publicDirectory, '').replaceAll('\\', '/');
      images.push(`${SITE_CONFIG.url}${urlPath}`);
    }
  }

  return images;
}

function generateStaticRoutes(directory: string, appDirectory: string): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  for (const file of fs.readdirSync(directory)) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      !file.startsWith('(') &&
      !file.startsWith('_') &&
      !file.startsWith('@') &&
      file !== 'api'
    ) {
      routes.push(...generateStaticRoutes(filePath, appDirectory));
    }

    if (!PAGE_FILES.has(file)) continue;

    const routePath = directory.replace(appDirectory, '').replaceAll('\\', '/') || '/';

    if (EXCLUDED_ROUTES.has(routePath)) continue;

    routes.push({
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE_CONFIG.url}${routePath}`
    });
  }

  return routes;
}

export function generateSitemap(): MetadataRoute.Sitemap {
  const appDirectory = path.join(process.cwd(), 'src', 'app');
  const publicDirectory = path.join(process.cwd(), 'public');
  const routes = generateStaticRoutes(appDirectory, appDirectory);
  const rootRoute = routes.find((route) => route.url === `${SITE_CONFIG.url}/`);

  if (!rootRoute) {
    console.error('Could not find the root route while generating the sitemap.');
    return routes;
  }

  rootRoute.changeFrequency = 'yearly';
  rootRoute.images = getImagesInDirectory(publicDirectory, publicDirectory);
  rootRoute.priority = 1;

  return routes;
}
