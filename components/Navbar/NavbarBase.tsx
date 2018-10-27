import {
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import React from "react";
import { Routes } from "../../constants";

interface Props {
  drawerOpen: boolean;
  onCloseDrawer(): void;
  onOpenDrawer(): void;
}

const NavbarBase = ({ drawerOpen, onCloseDrawer, onOpenDrawer }: Props) => (
  <React.Fragment>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" onClick={onOpenDrawer}>
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
    <Drawer onClose={onCloseDrawer} open={drawerOpen}>
      <Link href={Routes.index}>
        <a>Main Menu</a>
      </Link>
    </Drawer>
  </React.Fragment>
);

export default NavbarBase;
