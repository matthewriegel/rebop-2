import "normalize.css";
import React from "react";
import GameContainer from "../components/GameContainer";
import Navbar from "../components/Navbar";
import "../global.css";

class GamePage extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <GameContainer />
      </React.Fragment>
    );
  }
}

export default GamePage;
