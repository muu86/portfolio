"use client";

import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";
import { useFlowStore } from "@/lib/flow/context/flow-context-provider";
import { useEffect } from "react";
import { Edge } from "@/lib/flow/types";

export function FlowSelector() {
  const selectedId = useScrollStore((s) => s.selectedId);

  const idToEdges = useScrollStore((s) => s.idToEdges);
  const edges = useFlowStore((s) => s.edges);
  const setSelectedEdges = useFlowStore((s) => s.updateSelectedEdges);

  useEffect(() => {
    if (selectedId === null) return;

    const selectedEdges = idToEdges?.get(selectedId);

    if (!selectedEdges) {
      setSelectedEdges([]);
    } else {
      setSelectedEdges(
        selectedEdges.reduce<Edge[]>((acc, curr) => {
          const found = edges.find((e) => e.sourceId === curr.source && e.targetId === curr.target);
          if (found) {
            acc.push(found);
          }
          return acc;
        }, []),
      );
    }
  }, [edges, idToEdges, selectedId, setSelectedEdges]);

  return null;
}
