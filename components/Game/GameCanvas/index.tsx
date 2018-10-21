import * as React from "react";
import { TurnProps } from "../definitions";
import { CanvasContainer } from "./components";
import { getGame, getScene } from "./Phaser";

class GameCanvas extends React.Component<TurnProps> {
  private canvasRef = React.createRef<HTMLCanvasElement>();
  private game: Phaser.Game | undefined;

  public componentDidMount() {
    this.initializeGame();
  }

  public componentDidUpdate(prevProps: TurnProps) {
    const { sceneKey } = this.props;
    if (sceneKey !== prevProps.sceneKey) {
      this.setScene(prevProps.sceneKey);
    }
  }

  public componentWillUnmount() {
    this.destroyGame();
  }

  public render() {
    console.log("rendering game");
    return (
      <CanvasContainer>
        <canvas ref={this.canvasRef}>Game</canvas>
      </CanvasContainer>
    );
  }

  private initializeGame = () => {
    if (this.canvasRef.current) {
      console.log("initializing game");
      const scene = getScene(this.props);
      this.game = getGame(this.canvasRef.current, scene);
    } else {
      console.log("reference not mounted properly");
    }
  };

  private setScene = (oldKey: string) => {
    const { sceneKey } = this.props;
    const scene = getScene(this.props);

    if (!this.game) {
      throw new Error("Game not loaded");
    }

    this.game.scene.add(sceneKey, scene, true);
    this.game.scene.remove(oldKey);
  };

  private destroyGame = () => {
    this.game && this.game.destroy(false);
  };
}

export default GameCanvas;
