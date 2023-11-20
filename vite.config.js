import react from '@vitejs/plugin-react';
import VitePWA from 'vite-plugin-pwa';

const reactPlugin = react();

const pwaPlugin = VitePWA({
  manifest: {
    name: 'NetQuize',
    short_name: 'NetQuize',
    description: 'NetQuize',
    theme_color: '#ffffff',
    background_color: '#ffffff',
  },
  workbox: {
    
  },
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
