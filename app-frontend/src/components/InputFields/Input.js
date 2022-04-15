import React, { useState } from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";

const Input = ({ onSendMessage }) => {
    const [text, setText] = useState("")

    let onChange = (e) => {
        setText(e.target.value)
    }

    let onSubmit = () => {
        setText("")
        onSendMessage(text);
    }

    return (
        <Stack style={{ display:'block', position:'fixed' , left:'45%', bottom:'10px', width:'100%'}} direction="row" spacing={1}>
            <TextField
                placeholder="Enter your message and press ENTER"
                onChange={e => onChange(e)}
                value={text}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        onSubmit(text);
                    }
                }}
                style={{backgroundColor:'white',width:'40%'}}
            />
            <Button style={{width:'10%'}} variant="contained" color="success" endIcon={<SendIcon />} onClick={onSubmit}>
        Send
      </Button>
        </Stack>
    );
}


export default Input
