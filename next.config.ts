import createMDX from '@next/mdx';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx', 'md'],
  experimental: {
    reactCompiler: true
  }
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
