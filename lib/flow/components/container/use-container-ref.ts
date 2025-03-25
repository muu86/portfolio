import { useEffect, useRef } from "react";
import { useFlowStore } from "@/lib/flow/context/flow-context-provider";

export function useContainerRef() {
  const updateContainerRect = useFlowStore((s) => s.updateContainerRect);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof ResizeObserver === "undefined") {
      return;
    }

    if (!ref.current) {
      return;
    }

    const update = () => {
      if (ref.current == null) {
        return;
      }

      const { top, right, bottom, left, width, height } = ref.current.getBoundingClientRect();

      updateContainerRect({ top, right, bottom, left, width, height });
    };

    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver?.disconnect();
    };
  }, [updateContainerRect]);

  return ref;
}
