import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ebuilder-setup',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
