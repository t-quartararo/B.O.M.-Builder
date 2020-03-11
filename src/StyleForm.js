import React from "react";
import { TextField } from '@material-ui/core'

function StyleForm() {
    return (
        <div id="sf-container">
            <div id='row-1'>
                <TextField 
                margin="dense"
                fullWidth
                id="standard-basic" 
                label="Style Name"
                size='small' />
            </div>
            <div id='row-2'>
                <TextField fullWidth id="standard-basic" label="Style Number" size='small' margin="dense" />
                <TextField fullWidth id="standard-basic" label="Season" size='small' margin="dense"/>
                <TextField fullWidth id="standard-basic" label="Designer"size='small' margin="dense"/>
            </div>
            <div id='row-3'>
                <TextField fullWidth id="standard-basic" label="COO" size='small' margin="dense"/>
                <TextField fullWidth id="standard-basic" label="Sample Number" size='small' margin="dense" />
                <TextField fullWidth id="standard-basic" label="Description" size='small' margin="dense" />
            </div>
        </div>
    )
}

export default StyleForm