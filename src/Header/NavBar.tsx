import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, ThemeProvider } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Styles from "./styles";

const NavBar: React.FC = () => {

  return (
      <AppBar className={Styles.Root}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" >
            Mercedes
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  );
}

export default NavBar;