import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/site.css';
import './styles/game.css';
import './styles/home.css';
import './styles/pages.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>
);
