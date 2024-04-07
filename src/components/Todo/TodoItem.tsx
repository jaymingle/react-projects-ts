import React from 'react';
import {AppBar, Box, IconButton, styled, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";

const TodoItem: React.FC= () => {

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    })

    return (
        <AppBar position="static">
            <StyledToolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    Photos
                </Typography>
                <Box>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Menu />
                    </IconButton>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Menu />
                    </IconButton>
                </Box>
            </StyledToolbar>
        </AppBar>
    );
};

export default TodoItem;