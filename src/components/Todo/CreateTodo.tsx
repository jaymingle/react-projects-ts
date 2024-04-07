import React from 'react';
import {Box, Button, styled, TextField} from "@mui/material";

const CreateTodo: React.FC= () => {

    const StyledBox = styled(Box)({
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        padding: '20px 0'
    })

    return (
        <StyledBox>
            <TextField sx={{width: '70%'}} autoFocus id="outlined-basic" placeholder="Enter To Do" variant="standard" />
            <Button variant="contained">Add Todo</Button>
        </StyledBox>
    );
};

export default CreateTodo;