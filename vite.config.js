import React from 'react';
import { createPWA } from 'vite-plugin-pwa';
import { VitePWAOptions } from 'vite-plugin-pwa/dist/types';


const pwaPlugin = createPWA({
  config: require('./pwa.config.js'),
});

export default {
  // Other Vite config options...
  plugins: [pwaPlugin, reactPlugin()],
};

function reactPlugin(): VitePWAOptions['jsxInject'] {
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
