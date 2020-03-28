import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountApp from './CountApp.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <a>
         Hello World
        </a>
        <CountApp />
      </header>
    </div>
  );
}

export default App;
