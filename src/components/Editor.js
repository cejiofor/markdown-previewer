import React from 'react'
import {Button, Card, Typography} from '@material-ui/core';

export default function Editor() {

    const sampleText = `
        a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

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
   
    return (
        <Card>
            <textarea id="editor">
               {sampleText}
            </textarea>
        </Card>
    )
}
