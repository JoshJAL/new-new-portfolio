import createMDX from '@next/mdx';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '32kb'
    },
    viewTransition: true
  },
  images: {
    qualities: [60, 75]
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx', 'md'],
  reactCompiler: true
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
