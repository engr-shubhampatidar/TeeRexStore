import { Box } from '@mui/material';
import Navbar from './Navbar';
import AppRouter from './products/AppRouter';

function App() {
  return (
    <Box style={{height: '100vh'}}>
      <Navbar />
      <AppRouter />
    </Box>
  );
}

export default App;
