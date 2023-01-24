import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Darkmode from 'darkmode-js';
import './Darkmode.scss';
import './Scrollbar.scss';


// DARKMODE
new Darkmode({
  bottom: '10px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '10px', // default: 'unset'
  time: '0.3s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#333',  // default: '#100f2c'
  buttonColorLight: '#1BA39C', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: false // default: true
}).showWidget();


// APP
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

