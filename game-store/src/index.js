import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import MouseMove from './Components/MouseMove';
import GameStoreAppContext from './services/utilities';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GameStoreAppContext>
      <App />
    </GameStoreAppContext>
    <MouseMove></MouseMove>
  </BrowserRouter>
);

reportWebVitals();
