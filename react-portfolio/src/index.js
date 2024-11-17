import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './index.css'; // Ensure the path is correct
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Initialize React root
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Optional: Remove if not needed
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
