import react from '@vitejs/plugin-react';
import VitePWA from 'vite-plugin-pwa';
import { defineConfig } from 'vite';


export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'NetQuize',
        short_name: 'NetQuize',
        description: 'NetQuize',
        theme_color: '#ffffff',
        background_color: '#ffffff',
      },
      workbox: {
        
      },
    }),
  ],
  server: {
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
});
