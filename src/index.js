import React from 'react';
import ReactDOM from 'react-dom';
// using ES6 modules
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import store from './redux/store'

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

