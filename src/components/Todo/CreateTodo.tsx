import React, {useState} from 'react';
import {Box, Button, styled, TextField} from "@mui/material";
import Todo from "../../model.ts";

const CreateTodo: React.FC= () => {

    const[todo, setTodo] = useState<string>('');

    const StyledBox = styled(Box)({
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        padding: '20px 0'
    })

    const todoSubmitHandler = (e) => {
        e. preventDefault();
        console.log('Clicked')
    }

    return (
        <StyledBox>
            <form style={{width: '80%', display: 'flex', gap: '20px'}} onSubmit={todoSubmitHandler}>
                <TextField sx={{width: '70%'}} value={todo} onChange={e => setTodo(e.target.value)} autoFocus id="outlined-basic" placeholder="Enter To Do" variant="standard" />
                <Button type="submit" variant="contained">Add Todo</Button>
            </form>
        </StyledBox>
    );
};

export default CreateTodo;