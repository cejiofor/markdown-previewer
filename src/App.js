import React from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer'
import logo from './logo.svg';
import './App.css';
import ReactFCCTest from 'react-fcctest';

function App() {
  return (
    <div className="App">
    <ReactFCCTest />
      <header className="App-header">
        
        <Editor/>
        <Previewer />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
