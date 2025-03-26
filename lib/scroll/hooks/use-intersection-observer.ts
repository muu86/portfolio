import { useEffect, useRef } from "react";
import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";
import { useFlowStore } from "@/lib/flow/context/flow-context-provider";
import { Edge } from "@/lib/flow/common/types";

export function useIntersectionObserver() {
  const setSelectedId = useScrollStore((s) => s.setSelectedId);

  const edgeMap = useScrollStore((s) => s.edgeMap);
  const edges = useFlowStore((s) => s.edges);
  const updateSelectedEdges = useFlowStore((s) => s.updateSelectedEdges);

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

            const mappedEdges = scrollId ? edgeMap?.get(scrollId) : undefined;
            if (!mappedEdges) {
              updateSelectedEdges([]);
            } else {
              updateSelectedEdges(
                mappedEdges.reduce<Edge[]>((acc, curr) => {
                  const found = edges.find((e) => e.sourceId === curr.source && e.targetId === curr.target);
                  if (found) {
                    acc.push(found);
                  }
                  return acc;
                }, []),
              );
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-10% 0% -20% 0%",
      },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [edgeMap, edges, setSelectedId, updateSelectedEdges]);

  return ref;
}
