"use client";

import { useEffect, useState } from "react";
import { useFlowStore } from "@/lib/flow/context/flow-context-provider";
import { EdgeType, Position } from "../../common/types";
import { calcBezier, getRelativeRect, getSmoothStepPath } from "@/lib/flow/utils/calc-edges";

type EdgeProps = {
  sourceId: string;
  targetId: string;
  sourcePosition: Position;
  targetPosition: Position;
  type: EdgeType;
};

export function Edge({
  sourceId,
  targetId,
  sourcePosition = Position.Right,
  targetPosition = Position.Left,
  type = "bezier",
}: EdgeProps) {
  const nodes = useFlowStore((s) => s.nodes);

  const [path, setPath] = useState("");

  const [isSelected, setIsSelected] = useState<boolean>(false);
  const edges = useFlowStore((s) => s.edges);
  const selectedEdgeIndex = useFlowStore((s) => s.selectedEdgeIndex);
  useEffect(() => {
    if (selectedEdgeIndex < 0 || selectedEdgeIndex >= edges.length) {
      setIsSelected(false);
    } else {
      const edge = edges[selectedEdgeIndex];
      setIsSelected(edge.sourceId === sourceId && edge.targetId === targetId);
    }
  }, [sourceId, targetId, edges, selectedEdgeIndex]);

  useEffect(() => {
    const source = nodes.get(sourceId);
    const target = nodes.get(targetId);

    if (!source || !target) {
      return;
    }

    const { sx, sy, tx, ty } = getRelativeRect({ source, sourcePosition, target, targetPosition });

    if (type === "smooth-step") {
      const [path] = getSmoothStepPath({
        sourceX: sx,
        sourceY: sy,
        sourcePosition,
        targetX: tx,
        targetY: ty,
        targetPosition,
      });
      setPath(path);
    } else if (type === "bezier") {
      setPath(
        calcBezier({
          sx,
          sy,
          sp: sourcePosition,
          tx,
          ty,
          tp: targetPosition,
        }),
      );
    }
  }, [sourceId, sourcePosition, targetId, targetPosition, type, nodes]);

  return (
    <g data-id={`e-${sourceId}-${targetId}`}>
      <path d={path} strokeWidth={isSelected ? 2 : 1} stroke="black" fill="none" strokeDasharray="4px, 2px">
        {isSelected && <animate attributeName="stroke-dashoffset" from="30" to="0" dur="2s" repeatCount="indefinite" />}
      </path>
      {/*<path className="z-10" pointerEvents="stroke" d={path} strokeWidth={10} stroke="transparent" fill="none" />*/}
    </g>
  );
}
