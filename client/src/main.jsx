import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MouseMove from './Components/MouseMove';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <MouseMove></MouseMove>
    </BrowserRouter>
  </React.StrictMode>,
)
