"use client";

import { useEffect, useReducer, useRef, useState } from "react";
import { useFlowStore } from "@/lib/flow/context/flow-context-provider";
import { Position, Node } from "../../common/types";
import { getSmoothStepPath } from "@/lib/flow/utils/calc-edges";

type EdgeProps = {
  sourceId: string;
  targetId: string;
  sourcePosition: Position;
  targetPosition: Position;
  type: string;
};

export function Edge({
  sourceId,
  targetId,
  sourcePosition = Position.Right,
  targetPosition = Position.Left,
  type = "bezier",
}: EdgeProps) {
  const nodes = useFlowStore((s) => s.nodes);

  const cx = useFlowStore((s) => s.x);
  const cy = useFlowStore((s) => s.y);

  const [path, setPath] = useState("");
  const [hover, toggleHover] = useReducer((s) => !s, false);

  useEffect(() => {
    const source = nodes.get(sourceId);
    const target = nodes.get(targetId);

    if (!source || !target) {
      return;
    }

    if (sourceId === "hero") {
      console.log("bottom", source.bottom);
    }

    const { sx, sy, tx, ty } = getRelativeRect({ source, sourcePosition, target, targetPosition, cx, cy });

    // if (type === "smooth-step") {
    const [path] = getSmoothStepPath({
      sourceX: sx,
      sourceY: sy,
      sourcePosition,
      targetX: tx,
      targetY: ty,
      targetPosition,
    });
    setPath(path);
    // }

    // if (type === "bezier") {
    // setPath(
    //   calcBezierTopToLeft({
    //     sx,
    //     sy,
    //     sp: sourcePosition,
    //     tx,
    //     ty,
    //     tp: targetPosition,
    //   }),
    // );
    // }
  }, [sourceId, targetId, nodes, cx, cy]);

  return (
    <g data-id={`e-${sourceId}-${targetId}`}>
      <path d={path} strokeWidth={hover ? 2 : 1} stroke="black" fill="none" strokeDasharray="2px, 4px">
        {/*<animate attributeName="stroke-dashoffset" from="30" to="0" dur="2s" repeatCount="indefinite" />*/}
      </path>
      <path
        className="z-10"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        pointerEvents="stroke"
        d={path}
        strokeWidth={10}
        stroke="transparent"
        fill="none"
      />
    </g>
  );
}

function getRelativeRect({
  source,
  sourcePosition,
  target,
  targetPosition,
  cx,
  cy,
}: {
  source: Node;
  sourcePosition: Position;
  target: Node;
  targetPosition: Position;
  cx: number;
  cy: number;
}) {
  const [startX, startY] = getCoordinates(source, sourcePosition);
  const [targetX, targetY] = getCoordinates(target, targetPosition);

  // return {
  //   sx: startX - window.scrollX,
  //   sy: startY - window.scrollY,
  //   tx: targetX - window.scrollX,
  //   ty: targetY - window.scrollY,
  // };

  return {
    sx: startX,
    sy: startY,
    tx: targetX,
    ty: targetY,
  };
}

function getCoordinates(node: Node, position: Position) {
  const { top, right, bottom, left, width, height } = node;

  switch (position) {
    case Position.Top:
      return [left + width / 2, top];
    case Position.Right:
      return [right, top + height / 2];
    case Position.Bottom:
      return [left + 8, bottom];
    default:
      return [left, top + height / 2];
  }
}

function calcBottomToLeft(source: Node, target: Node, cx: number, cy: number, leftMargin: number = 20) {
  const { sx, sy, sw, sh, tx, ty, tw, th } = getRelativeRect(source, target, cx, cy);

  return `M ${sx + leftMargin}, ${sy + sh} V ${ty + th / 2} L ${tx}, ${ty + th / 2}`;
}

function calcLeftToLeft(source: Node, target: Node, cx: number, cy: number, leftMargin: number = 20) {
  const { sx, sy, sw, sh, tx, ty, tw, th } = getRelativeRect(source, target, cx, cy);

  return `M ${sx}, ${sy + sh / 2} H ${sx - leftMargin} V ${ty + th / 2} L ${tx}, ${ty + th / 2}`;
}

function calcTopToLeft(source: Node, target: Node, cx: number, cy: number, leftMargin: number = 20) {
  const { sx, sy, sw, sh, tx, ty, tw, th } = getRelativeRect(source, target, cx, cy);

  return `M ${sx + sw / 2}, ${sy} H ${sx - leftMargin} V ${ty + th / 2} L ${tx}, ${ty + th / 2}`;
}

function calcBezierTopToLeft({
  sx,
  sy,
  sp,
  tx,
  ty,
  tp,
}: {
  sx: number;
  sy: number;
  sp: Position;
  tx: number;
  ty: number;
  tp: Position;
}) {
  const curvature = 0.25;

  const [sourceControlX, sourceControlY] = getControlWithCurvature({
    pos: sp,
    x1: sx,
    y1: sy,
    x2: tx,
    y2: ty,
    c: curvature,
  });
  const [targetControlX, targetControlY] = getControlWithCurvature({
    pos: tp,
    x1: tx,
    y1: ty,
    x2: sx,
    y2: sy,
    c: curvature,
  });

  return `M${sx},${sy} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${tx},${ty}`;
}

function calculateControlOffset(distance: number, curvature: number): number {
  if (distance >= 0) {
    return 0.5 * distance;
  }

  return curvature * 25 * Math.sqrt(-distance);
}

export type GetControlWithCurvatureParams = {
  pos: Position;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  c: number;
};

function getControlWithCurvature({ pos, x1, y1, x2, y2, c }: GetControlWithCurvatureParams): [number, number] {
  switch (pos) {
    case Position.Left:
      return [x1 - calculateControlOffset(x1 - x2, c), y1];
    case Position.Right:
      return [x1 + calculateControlOffset(x2 - x1, c), y1];
    case Position.Top:
      return [x1, y1 - calculateControlOffset(y1 - y2, c)];
    case Position.Bottom:
      return [x1, y1 + calculateControlOffset(y2 - y1, c)];
  }
}
