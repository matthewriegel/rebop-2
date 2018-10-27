import "normalize.css";
import React from "react";
import GameRoot from "../components/Game";
import Navbar from "../components/Navbar";

class GamePage extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <GameRoot />
      </React.Fragment>
    );
  }
}

export default GamePage;
