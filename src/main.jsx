import { createRoot } from 'react-dom/client';
import "./assets/css/style.css";
import "./assets/css/result.css";
import "./assets/css/home.css";
import "./assets/css/quiz.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./context/QuizContext";


import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(<App />);


