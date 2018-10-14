import * as React from "react";
import { OverlayStyle } from "./styles";

export interface PointSprite {
  amount: number;
  key: string;
  transitionEnd: () => void;
}

interface Props {
  roundScoe: number;
  gameScore: number;
  ballsRemaining: number;
}

const GameOverlay: React.SFC<Props> = ({
  roundScoe,
  gameScore,
  ballsRemaining,
}) => (
  <div style={OverlayStyle}>
    <div>Turns remaining: {ballsRemaining}</div>
    <div>Game score: {gameScore}</div>
    <div>Round score: {roundScoe}</div>
  </div>
);

export default GameOverlay;
