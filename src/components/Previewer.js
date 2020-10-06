import React from 'react';
import {Button, Card, Typography} from '@material-ui/core';
import marked from "marked";
import sanitizeHtml from 'sanitize-html';
import CssBaseline from '@material-ui/core/CssBaseline';


function Previewer({text, onChange}) {
    const markedText = marked(text, {gfm: true, breaks:true});
    // const cleanMarkedText = sanitizeHTML(markedText);
    // const renderer = new marked.Renderer();
    // var rawMarkup = marked('This is _Markdown_.', {sanitize: true});

    return (
        <div>
            <Card onChange={onChange}>
               <div id="preview" dangerouslySetInnerHTML={{ __html:  sanitizeHtml(marked(markedText), {
                   allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])
               }) }}>
            </div>
            </Card> 
            
        </div>
    )
}

export default Previewer


