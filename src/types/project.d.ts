import type { StaticImageData } from 'next/image';

export type Project = {
  backgroundColor?: string;
  codeHref?: string;
  description: string;
  href: string;
  image: StaticImageData;
  projectHref?: string;
  title: string;
};
