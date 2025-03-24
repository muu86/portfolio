import { useEffect, useState } from "react";
import { useFlowStore } from "@/lib/flow/context/flow-context-provider";
import { NodeUpdate } from "@/lib/flow/common/types";

export function useMutationObserver() {
  const setMutationObserver = useFlowStore((s) => s.setMutationObserver);
  const updateNodes = useFlowStore((s) => s.updateNodes);
  const [mutationObserver] = useState(() => {
    if (typeof MutationObserver == "undefined") {
      return null;
    }

    return new MutationObserver((mutations) => {
      const updates: NodeUpdate[] = [];

      mutations.forEach((mutation) => {
        if (mutation.target.nodeType === 1) {
          const id = (mutation.target as Element).getAttribute("data-node-id");
          if (id === null) return;

          const { top, right, bottom, left, width, height } = (mutation.target as Element).getBoundingClientRect();
          updates.push({
            id,
            rect: {
              top,
              right,
              bottom,
              left,
              width,
              height,
            },
          });
        }
      });

      updateNodes(updates);
    });
  });

  useEffect(() => {
    if (mutationObserver !== null) {
      setMutationObserver(mutationObserver);
    }
    return () => {
      mutationObserver?.disconnect();
    };
  }, [mutationObserver, setMutationObserver]);
}
