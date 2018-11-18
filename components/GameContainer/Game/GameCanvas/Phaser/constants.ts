import { GAME_HEIGHT_RATIO } from "../contants";

const DPR = 1;
const GAME_WIDTH = 600;

const getGameWidth = () => GAME_WIDTH * DPR * GAME_HEIGHT_RATIO;

export const GAME = {
  HEIGHT: GAME_WIDTH * DPR,
  WIDTH: getGameWidth(),
  GRAVITY: 300,
  CANNON_POSITION: { x: getGameWidth() / 2, y: 50 },
  PEG_RADIUS: 16,
  PLAYER_RADIUS: 16,
  CANNON_STRENGTH: 10,
  SPEED_RESET_THRESHOLD: 0.01,
};
