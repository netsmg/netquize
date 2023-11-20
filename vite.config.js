import { defineConfig } from 'vite';
import React from 'react';
import { VitePWAOptions } from 'vite-plugin-pwa';



const pwaPlugin: VitePWAOptions = {
  manifest: {
    
    name: 'NetQuize',
    short_name: 'NetQuize',
    description: 'NetQuize ',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      
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
 
  plugins: [
    reactPlugin(),
    VitePWA(pwaPlugin),
  ],
});

function reactPlugin() {
  return `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App'; 

    ReactDOM.render(
      React.createElement(React.StrictMode, null, React.createElement(App, null)),
      document.getElementById('root')
    );
  `;
}
