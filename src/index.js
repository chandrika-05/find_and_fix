import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 uses createRoot
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // 'root' matches the id in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
