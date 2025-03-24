import { useEffect, useRef } from "react";
import { useFlowStore } from "@/lib/flow/context/flow-context-provider";

export function useContainerRef() {
  const updateContainerDimensions = useFlowStore((s) => s.updateContainerDimensions);
  const updateContainerCoordinates = useFlowStore((s) => s.updateContainerCoordinates);
  const setIsScrolling = useFlowStore((s) => s.setIsScrolling);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof ResizeObserver === "undefined") {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      if (ref.current == null) {
        return;
      }

      const { x, y, width, height } = ref.current.getBoundingClientRect();
      updateContainerCoordinates({ x, y });
      updateContainerDimensions({ width, height });
    });

    if (ref.current != null) {
      resizeObserver.observe(ref.current);
    }

    const updateIsScrolling = () => {
      setIsScrolling(true);

      setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    };

    window.addEventListener("scroll", updateIsScrolling);

    return () => {
      resizeObserver?.disconnect();

      window.removeEventListener("scroll", updateIsScrolling);
    };
  }, [updateContainerCoordinates, updateContainerDimensions, setIsScrolling]);

  return ref;
}
