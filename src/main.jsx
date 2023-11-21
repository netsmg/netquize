import { createRoot } from 'react-dom/client';
import "./assets/css/style.css";
import "./assets/css/result.css";
import "./assets/css/home.css";
import "./assets/css/quiz.css";

import { BrowserRouter } from "react-router-dom";



import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(<App />);


