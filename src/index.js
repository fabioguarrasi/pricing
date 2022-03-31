import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Homepage from './Homepage';
import Regular from './Regular';
import Pro from './Pro';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/regular" element={<Regular />} />
        <Route path="/pro" element={<Pro />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
