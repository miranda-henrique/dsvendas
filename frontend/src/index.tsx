import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/styles.css'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <h1 className = "text-primary">Olá, mundo!</h1>
  </React.StrictMode>,
  document.getElementById('root')
);

