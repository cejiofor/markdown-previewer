import React from 'react'
import {Button, Card, Typography} from '@material-ui/core';

export default function Editor({text, onChange}) {

    
   
    return (
        <Card>
            <textarea id="editor" onChange={onChange}>
               {text}
            </textarea>
        </Card>
    )
}
