import { styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          color: "#2B2D42",
          background: "#EDF2F4",
          height: "40px",
          justifyContent: "center",
        }}
        position="static"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
            }}
          >
            TeeRex Store
          </Typography>
          <NavLinks to="/list">Products</NavLinks>
          <NavLinks to="/cart">Shopping Cart</NavLinks>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const NavLinks = styled(Link)({
  padding: "10px",
  color: "#2B2D42",
  textDecoration: "none",
});

export default Navbar;
