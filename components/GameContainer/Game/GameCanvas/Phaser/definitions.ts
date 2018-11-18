export enum ImageType {
  Player = "image_player",
  Peg = "image_peg",
  Cannon = "image_cannon"
}

export enum SceneType {
  Replay = "replayScene",
  Ready = "readyScene"
}

export enum ObjectType {
  Player = "object_player",
  Peg = "object_peg"
}

export enum GameEvents {
  PointerDown = "pointerdown",
  SleepStart = "sleepstart",
  Drag = "drag",
  DragStart = "dragstart",
  CollisionStart = "collisionstart"
}

export interface PegData {
  index: number;
}
