import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    // Use a middleware to set MIME type for service worker
    middlewares: [
      (req, res, next) => {
        if (req.url === '/service-worker.js') {
          res.setHeader('Content-Type', 'application/javascript');
        }
        next();
      },
    ],
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
});
