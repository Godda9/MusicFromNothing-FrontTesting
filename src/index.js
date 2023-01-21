import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import Darkmode from 'darkmode-js';
import './Darkmode.scss';
new Darkmode({
  bottom: '10px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '10px', // default: 'unset'
  time: '0.3s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: 'unset',  // default: '#fff'
  backgroundColorDark: 'red',
  buttonColorDark: '#333',  // default: '#100f2c'
  buttonColorLight: '#1BA39C', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: false // default: true
}).showWidget();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
