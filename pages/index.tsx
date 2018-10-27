import { Typography } from "@material-ui/core";
import Link from "next/link";
import "normalize.css";
import React from "react";
import Navbar from "../components/Navbar";
import { Routes } from "../constants";

export default (): React.ReactNode => (
  <React.Fragment>
    <Navbar />
    <Typography variant="h6" color="inherit">
      Main Menu
    </Typography>
    <Link href={Routes.game}>
      <a>Start New Game</a>
    </Link>
  </React.Fragment>
);
