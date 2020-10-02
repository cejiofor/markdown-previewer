import React from 'react'
import {Button, Card, Typography} from '@material-ui/core';

export default function Editor({text}) {

    
   
    return (
        <Card>
            <textarea id="editor">
               {text}
            </textarea>
        </Card>
    )
}
