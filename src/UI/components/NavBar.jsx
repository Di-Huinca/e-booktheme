import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBack from '@mui/icons-material/ArrowBack';

export function NavBar() {
  return(
    <Box className='container' sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
      <IconButton
          size="large"
          edge="start"
          color="inherit"
        >
          <ArrowBack/>
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
  );
  }
