import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

// ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement,
//   <React.StrictMode>
//     <Router />
//   </React.StrictMode>
// );
ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <Router />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
