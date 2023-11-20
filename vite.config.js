

import react from '@vitejs/plugin-react';
import { createPWA } from 'vite-plugin-pwa';

const reactPlugin = react();

const pwaPlugin = createPWA({
  config: require('./pwa.config.js'),
});

export default {
  plugins: [reactPlugin, pwaPlugin],
  server: {
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
};
