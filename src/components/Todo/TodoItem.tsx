import React from 'react';
import {AppBar, Box, IconButton, styled, Toolbar, Typography} from "@mui/material";
import {Check, Delete} from "@mui/icons-material";

const TodoItem: React.FC= () => {

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    })

    return (
        <AppBar position="static" sx={{margin: '8px 0'}}>
            <StyledToolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    Photos
                </Typography>
                <Box>
                    <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Delete />
                    </IconButton>
                    <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Check />
                    </IconButton>
                </Box>
            </StyledToolbar>
        </AppBar>
    );
};

export default TodoItem;