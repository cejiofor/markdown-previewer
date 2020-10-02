import React, { Component, useState, useEffect, useCallback} from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer'
import logo from './logo.svg';
import './App.css';
import ReactFCCTest from 'react-fcctest';

function App() {
  const sampleText = `
  # H1 header
  ## H2 header
  [a link](#)
  `;
  const [inputText, setInputText] = useState(sampleText);
  
  return (
    <div className="App">
    <ReactFCCTest />
      <header className="App-header">
        
        <Editor text={inputText} onChange={e => setInputText(e.target.value)}/>
        <Previewer text={inputText}/>
        
      </header>
    </div>
  );
}

export default App;
