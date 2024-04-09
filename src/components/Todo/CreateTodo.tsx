import React, {useState} from 'react';
import {Box, Button, styled, TextField} from "@mui/material";
import Todo from "../../model.ts";

interface PropValues {
    setTodoList:  React.Dispatch<React.SetStateAction<Todo[]>>
}

const CreateTodo: React.FC<PropValues> = ({setTodoList}) => {

    const[todo, setTodo] = useState<string>('');

    const StyledBox = styled(Box)({
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        padding: '20px 0'
    })

    const todoSubmitHandler = (e) => {
        e. preventDefault();
        setTodoList(todos => [...todos, {id: Date.now(), todo, completed: false}]);
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