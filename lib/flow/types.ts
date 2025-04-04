export enum Position {
  Left = "left",
  Top = "top",
  Right = "right",
  Bottom = "bottom",
}

export type Coordinates = {
  x: number;
  y: number;
};

export type Rect = {
  top: number;
  right: number;
  bottom: number;
  left: number;

  width: number;
  height: number;
};

export type Node = Rect & {
  id: string;
};

export type NodeUpdate = {
  id: string;
  rect: Rect;
};

export type Edge = {
  sourceId: string;
  targetId: string;
  sourcePosition: Position;
  targetPosition: Position;
  type: EdgeType;
  hidden: boolean;
};

export type EdgeType = "bezier" | "smooth-step";
