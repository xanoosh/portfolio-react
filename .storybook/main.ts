import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-remix-react-router',
    '@storybook/addon-jest',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {},

  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        path: require.resolve('path-browserify'),
      },
    };
    return mergeConfig(config, {
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
