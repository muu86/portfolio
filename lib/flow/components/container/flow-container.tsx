"use client";

import { useMutationObserver } from "@/lib/flow/components/container/use-mutation-observer";
import { PropsWithChildren, useEffect } from "react";
import { useFlowStore } from "@/lib/flow/context/flow-context-provider";
import { useContainerRef } from "@/lib/flow/components/container/use-container-ref";
import { useResizeObserver } from "@/lib/flow/components/container/use-resize-observer";
import { EdgeRenderer } from "@/lib/flow/components/container/edge-renderer";

export function FlowContainer({ children }: PropsWithChildren) {
  const updateContainerCoordinates = useFlowStore((s) => s.updateContainerCoordinates);
  const updateContainerDimensions = useFlowStore((s) => s.updateContainerDimensions);

  const ref = useContainerRef();
  useMutationObserver();
  // useResizeObserver();

  useEffect(() => {
    const update = () => {
      if (ref.current === null) return;

      const { x, y, width, height } = ref.current.getBoundingClientRect();
      updateContainerCoordinates({ x, y });
      updateContainerDimensions({ width, height });
    };

    update();

    window.addEventListener("scroll", update);

    return () => {
      window.removeEventListener("scroll", update);
    };
  }, [updateContainerCoordinates, updateContainerDimensions]);

  return (
    <div ref={ref} className="relative w-full">
      {children}

      <EdgeRenderer />
    </div>
  );
}
