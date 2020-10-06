import React, { Component, useState, useEffect, useCallback} from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import './App.css';
import Box from '@material-ui/core/Box';
import ReactFCCTest from 'react-fcctest';
import { CssBaseline, ScopedCssBaseline } from '@material-ui/core';

function App() {
  const sampleText = `
  # H1 header
  ## H2 header
  [a link](#)
  For example, the following is a code block:
      Newlines are preserved,
      and markdown syntax in code blocks is *NOT* formatted
      /* so that the syntax of a programming language being
      * displayed is rendered as-is
      */
  
  ~~~~~~
  This is also a code block.
  ~~~
  Ending lines must have at least as
  many tildes as the starting line.
  ~~~~~~~~~~~~ 



  > A sample blockquote.
  >
  > >Nested blockquotes are
  > >also possible.
  >
  > ## Headers work too
  > This is the outer quote again.

  1. This is a list item
  2. And another item
  2. And the third one
  with additional text

  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `;
  
  const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://techchronos.com/wp-content/uploads/SszarkLabs/stack-icon/cywBkaGwkMeDAuJbSt1k.png)
`;
  
  const [inputText, setInputText] = useState(placeholder);
  const onChange = (e) => {
    setInputText(e.target.value);
  }
  return (
    <div className="App">
      <ReactFCCTest />
      <header className="App-header">React Markdown Previewer</header>
        <Box display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center">
          <Editor text={inputText} onChange={onChange} />
        </Box>
        
        <Previewer text={inputText} onChange={onChange} />
    </div>
  );
}

export default App;
