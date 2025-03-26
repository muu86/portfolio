import { useEffect } from "react";
import { Position } from "@/lib/flow/common/types";
import { useFlowStore } from "@/lib/flow/context/flow-context-provider";
import { NodeEdge } from "@/lib/flow/components/node/node";

export function useAddEdges({
  id,
  position = Position.Right,
  edges = [],
}: {
  id: string;
  position?: Position;
  edges?: NodeEdge[];
}) {
  const addEdge = useFlowStore((s) => s.addEdge);

  useEffect(() => {
    if (edges.length == 0) return;

    for (const edge of edges) {
      if (!edge.id) continue;

      addEdge({
        sourceId: id,
        sourcePosition: position,
        targetId: edge.id,
        targetPosition: edge.position ?? Position.Left,
        type: edge.type ?? "bezier",
        hidden: !!edge.hidden,
      });
    }
  }, [id, position, edges, addEdge]);
}
