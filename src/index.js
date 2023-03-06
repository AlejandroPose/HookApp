import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './css/index.css';

import MainApp from './09-useContext/MainApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp/>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();