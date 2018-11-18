import * as React from "react";
import { OverlayStyle } from "./components";

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
  <OverlayStyle>
    <div>Turns remaining: {ballsRemaining}</div>
    <div>Game score: {gameScore}</div>
    <div>Round score: {roundScoe}</div>
  </OverlayStyle>
);

export default GameOverlay;
