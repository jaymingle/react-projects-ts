import React, {Dispatch, SetStateAction} from 'react';
import {AppBar, Box, IconButton, styled, Toolbar, Typography} from "@mui/material";
import {Check, Delete} from "@mui/icons-material";
import Todo from "../../model.ts";

interface TodoProps{
    todo: Todo[],
    setTodoList: Dispatch<SetStateAction<Todo[]>>
}

const TodoItem: React.FC<TodoProps> = ({todo, setTodoList}) => {

    const handleDelete = (id: number) => {
        setTodoList( prevTodoList => prevTodoList.filter(todo => todo.id !== id))
    }

    const handleComplete = (id: number) => {
        setTodoList(prevTodoList => prevTodoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    })

    return (
        <AppBar position="static" sx={{margin: '8px 0'}}>
            <StyledToolbar variant="dense">
                <Typography sx={todo.completed ? {textDecoration: 'line-through'} : {}} variant="h6" color="inherit" component="div">
                    {todo.todo}
                </Typography>
                <Box>
                    <IconButton onClick={()  => handleDelete(todo.id)} color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Delete />
                    </IconButton>
                    <IconButton onClick={ () => handleComplete(todo.id)} color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Check />
                    </IconButton>
                </Box>
            </StyledToolbar>
        </AppBar>
    );
};

export default TodoItem;