import { useEffect, useState } from "react";
import { useFlowStore } from "@/lib/flow/context/flow-context-provider";
import { NodeUpdate } from "@/lib/flow/components/node/types";

export function useResizeObserver() {
  const setResizeObserver = useFlowStore((s) => s.setResizeObserver);
  const updateNodes = useFlowStore((s) => s.updateNodes);
  const [resizeObserver] = useState(() => {
    if (typeof ResizeObserver == "undefined") {
      return null;
    }

    return new ResizeObserver((entries) => {
      const updates: NodeUpdate[] = [];

      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-node-id");
        if (id === null) return;

        updates.push({
          id,
          element: entry.target,
        });
      });

      updateNodes(updates);
    });
  });

  useEffect(() => {
    if (resizeObserver !== null) {
      setResizeObserver(resizeObserver);
    }

    return () => {
      setResizeObserver(null);
      resizeObserver?.disconnect();
    };
  }, [resizeObserver, setResizeObserver]);
}
