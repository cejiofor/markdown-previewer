import React from 'react';
import {Button, Card, Typography} from '@material-ui/core';
import marked from "marked";

function Previewer({text, onChange}) {
    const markedText = marked(text, {sanitize: true});
    // const renderer = new marked.Renderer();
    // var rawMarkup = marked('This is _Markdown_.', {sanitize: true});

    return (
        <div>
           <Card id="preview" onChange={onChange}>
               <Typography dangerouslySetInnerHTML={{ __html: marked(markedText) }}>
               </Typography>
                
            </Card> 
        </div>
    )
}

export default Previewer


