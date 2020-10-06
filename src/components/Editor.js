import React from 'react'
import {Button, Card, Typography} from '@material-ui/core';

import { CssBaseline, ScopedCssBaseline } from '@material-ui/core';

export default function Editor({text, onChange}) {

    
   
    return (
        <div>
            <Card>
                <textarea id="editor" rows="50" cols="50" onChange={onChange}>
                {text}
                </textarea>
            </Card>
        </div>
        
    )
}
