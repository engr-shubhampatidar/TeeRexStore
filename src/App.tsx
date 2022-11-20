import { Box } from "@mui/material";
import React from "react";
import AppRouter from "./products/AppRouter";

function App() {
  return (
    <React.StrictMode>
      <Box style={{ height: "100vh" }}>
        <AppRouter />
      </Box>
    </React.StrictMode>
  );
}

export default App;
