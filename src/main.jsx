import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

import ThemeProvider from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    
        <App />
      
    
  </ThemeProvider>
);


