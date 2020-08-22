import React from 'react';
import ReactDOM from 'react-dom';
// using ES6 modules
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

