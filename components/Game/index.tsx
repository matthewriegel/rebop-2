import dynamic from "next/dynamic";
import React from "react";
import ReactDOM from "react-dom";
import Clickable from "../Clickable";
import { GameViewContainer } from "./components";
import { PegCoordinates, TurnProps } from "./definitions";
import { PEG_LIST_FIXTURE } from "./fixtures";
import GameOverlay from "./GameOverlay";

const GameCanvas = dynamic<TurnProps>(import("./GameCanvas") as any, {
  ssr: false,
  loading: () => <p>...</p>,
});

interface State {
  ballsRemaining: number;
  pegs: PegCoordinates[];
  cannonAngle: number | null;
  sceneCount: number;
  gameScore: number;
  roundScore: number;
}

const DEFAULT_STATE: State = {
  ballsRemaining: 10,
  pegs: PEG_LIST_FIXTURE,
  sceneCount: 0,
  cannonAngle: null,
  gameScore: 0,
  roundScore: 0,
};

class GameRoot extends React.Component<{}, State> {
  private containerRef = React.createRef<any>();
  public state: State = DEFAULT_STATE;

  render() {
    const {
      cannonAngle,
      pegs,
      ballsRemaining,
      sceneCount,
      gameScore,
      roundScore,
    } = this.state;
    return (
      <Clickable
        onClick={() => {
          const myDomNode = ReactDOM.findDOMNode(this.containerRef.current);
          myDomNode.scrollIntoView();
        }}
      >
        <GameViewContainer ref={this.containerRef}>
          <GameOverlay
            gameScore={gameScore}
            roundScoe={roundScore}
            ballsRemaining={ballsRemaining}
          />
          <GameCanvas
            fireCannon={this.fireCannon}
            cannonAngle={cannonAngle}
            pegs={pegs}
            endTurn={this.endTurn}
            pointsRecieved={this.pointsRecieved}
            sceneKey={`${sceneCount}`}
          />
        </GameViewContainer>
      </Clickable>
    );
  }

  private endTurn = (pegs: PegCoordinates[]) => {
    console.log("Turn End");
    const { ballsRemaining, sceneCount, gameScore, roundScore } = this.state;

    this.setState({ gameScore: gameScore + roundScore, roundScore: 0 });

    if (ballsRemaining <= 0 || !pegs.length) {
      this.endGame();
    } else {
      this.setState({
        pegs,
        cannonAngle: null,
        sceneCount: sceneCount + 1,
      });
    }
  };

  private fireCannon = (cannonAngle: number) => {
    console.log("cannon fired", cannonAngle);
    const { ballsRemaining, sceneCount } = this.state;
    this.setState({
      cannonAngle,
      ballsRemaining: ballsRemaining - 1,
      sceneCount: sceneCount + 1,
    });
  };

  private endGame = () => {
    alert("GAME OVER");
    this.setState(DEFAULT_STATE);
  };

  private pointsRecieved = (points: number) => {
    const { roundScore } = this.state;
    this.setState({ roundScore: roundScore + points });
  };
}

export default GameRoot;
