import { useEffect, useRef } from "react";
import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";
import { useFlowStore } from "@/lib/flow/context/flow-context-provider";

export function useIntersectionObserver() {
  const setSelectedId = useScrollStore((s) => s.setSelectedId);

  const edgeMap = useScrollStore((s) => s.edgeMap);
  const edges = useFlowStore((s) => s.edges);
  const setSelectedEdgeIndex = useFlowStore((s) => s.setSelectedEdgeIndex);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const scrollId = entry.target.getAttribute("data-scroll-id");

            setSelectedId(scrollId);

            const edge = scrollId ? edgeMap?.get(scrollId) : undefined;
            if (!edge) {
              setSelectedEdgeIndex(-1);
            } else {
              const { source, target } = edge;
              setSelectedEdgeIndex(edges.findIndex((edge) => edge.sourceId === source && edge.targetId === target));
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0% -20% 0%",
      },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  });

  return ref;
}
