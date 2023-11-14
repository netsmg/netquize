import { createRoot } from 'react-dom/client';
import * as serviceWorker from "./swDev";

import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(<App />);

// Register the service worker
serviceWorker.register();
