// src/index.js or src/index.jsx
import React from 'react';
import { createRoot } from 'react-dom';
import './index.css'; // Import Tailwind CSS
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
