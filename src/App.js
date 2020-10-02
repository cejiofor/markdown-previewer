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
  // For example, the following is a code block:
  //     Newlines are preserved,
  //     and markdown syntax in code blocks is *NOT* formatted
  //     /* so that the syntax of a programming language being
  //     * displayed is rendered as-is
  //     */
  
  // ~~~~~~
  // This is also a code block.
  // ~~~
  // Ending lines must have at least as
  // many tildes as the starting line.
  // ~~~~~~~~~~~~ 



  // > A sample blockquote.
  // >
  // > >Nested blockquotes are
  // > >also possible.
  // >
  // > ## Headers work too
  // > This is the outer quote again.

  // 1. This is a list item
  // 2. And another item
  // 2. And the third one
  // with additional text

  // ![React Logo w/ Text](https://goo.gl/Umyytc)

  const [inputText, setInputText] = useState(sampleText);
  const onChange = (e) => {
    setInputText(e.target.value);
  }
  return (
    <div className="App">
    <ReactFCCTest />
      <header className="App-header">
        
        <Editor text={inputText} onChange={onChange} />
        <Previewer text={inputText} onChange={onChange}/>
        
      </header>
    </div>
  );
}

export default App;
