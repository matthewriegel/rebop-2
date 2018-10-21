import { Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import GameRoot from "../Game";

const GamePageBase: React.SFC<{}> = () => (
  <React.Fragment>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography
          style={{ flex: 1 }}
          align="center"
          variant="h6"
          color="inherit"
        >
          Rebop
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <GameRoot />
  </React.Fragment>
);

export default GamePageBase;
