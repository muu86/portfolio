"use client";

import { useFlowStore } from "@/lib/flow/context/flow-context-provider";
import { Edge } from "@/lib/flow/components/edge/edge";

export function EdgeRenderer() {
  const edges = useFlowStore((s) => s.edges);
  const isScrolling = useFlowStore((s) => s.isScrolling);

  return (
    <svg cursor="pointer" className="pointer-events-none absolute top-0 left-0 -z-1 h-full w-full overflow-visible">
      {/*{!isScrolling &&*/}
      {/*  edges.map((edge) => (*/}
      {/*    <Edge*/}
      {/*      key={`${edge.sourceId}-${edge.targetId}`}*/}
      {/*      sourceId={edge.sourceId}*/}
      {/*      sourcePosition={edge.sourcePosition}*/}
      {/*      targetId={edge.targetId}*/}
      {/*      targetPosition={edge.targetPosition}*/}
      {/*      type={edge.type}*/}
      {/*    />*/}
      {/*  ))}*/}

      {edges.map((edge) => (
        <Edge
          key={`${edge.sourceId}-${edge.targetId}`}
          sourceId={edge.sourceId}
          sourcePosition={edge.sourcePosition}
          targetId={edge.targetId}
          targetPosition={edge.targetPosition}
          type={edge.type}
        />
      ))}
    </svg>
  );
}
