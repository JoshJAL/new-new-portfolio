import nextConfig from 'eslint-config-next';

const config = [
  ...nextConfig,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              message: 'Use the canonical SiteLink component instead.',
              name: 'next/link'
            }
          ]
        }
      ]
    }
  },
  {
    files: ['src/components/ui/SiteLink.tsx'],
    rules: {
      'no-restricted-imports': 'off'
    }
  }
];

export default config;
