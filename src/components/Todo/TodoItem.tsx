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
        console.log('Delete', id)
    }

    const handleComplete = (id: number) => {
        console.log('Edit', id)
    }


    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    })

    return (
        <AppBar position="static" sx={{margin: '8px 0'}}>
            <StyledToolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    {todo.todo}
                </Typography>
                <Box>
                    <IconButton onClick={(e: React.FormEvent<EventTarget> )  => handleDelete(todo.id)} color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Delete />
                    </IconButton>
                    <IconButton onClick={ (e: React.FormEvent<EventTarget>) => handleComplete(todo.id)} color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Check />
                    </IconButton>
                </Box>
            </StyledToolbar>
        </AppBar>
    );
};

export default TodoItem;