import React from 'react';
import {Box, TextField} from "@mui/material";

const CreateTodo: React.FC= () => {
    return (
        <Box>
            <TextField autoFocus id="outlined-basic" placeholder="Enter To Do" variant="outlined" />

        </Box>
    );
};

export default CreateTodo;