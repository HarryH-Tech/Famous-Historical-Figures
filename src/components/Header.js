import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Header(signOut, user) {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Famous Historical Figures
          </Typography>
          <Button onClick={signOut} sx={{ color: "red" }}>
            Logout
          </Button>
          {user.username}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
