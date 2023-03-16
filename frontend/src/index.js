import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import store, { persistor } from './redux/store'
import axios from 'axios';
import { PersistGate } from 'redux-persist/integration/react'


axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
