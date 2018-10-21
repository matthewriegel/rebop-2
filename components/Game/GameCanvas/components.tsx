import styled from "react-emotion";
import { GAME_HEIGHT_RATIO } from "./contants";

export const CanvasContainer = styled("div")({
  "& > canvas": {
    objectFit: "fill",
    height: "100vh !important",
    width: `${100 * GAME_HEIGHT_RATIO}vh !important`,
  },
});
