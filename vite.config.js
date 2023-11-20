import { defineConfig } from 'vite';
import React from 'react';
import { VitePWAOptions } from 'vite-plugin-pwa';

// ... other imports

const pwaPlugin: VitePWAOptions = {
  manifest: {
    // Customize your PWA manifest options
    name: 'NetQuize',
    short_name: 'NetQuize',
    description: 'Your description here',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      // Customize your PWA icons
      {
        src: '/path/to/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/path/to/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
};

export default defineConfig({
  // ... other Vite config options
  plugins: [
    reactPlugin(),
    VitePWA(pwaPlugin), // Use VitePWA as a plugin by calling it directly
  ],
});

function reactPlugin() {
  return `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App'; // Replace with your React component file

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  `;
}
