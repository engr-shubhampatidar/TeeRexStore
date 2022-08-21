import React from 'react';
import './App.css'
import AppRouter from './products/AppRouter';
import { Box } from '@mui/system';
import Navbar from './Navbar';

function App() {
  return (
    <Box>
      <Navbar />
      <AppRouter />
    </Box>
  );
}

export default App;
