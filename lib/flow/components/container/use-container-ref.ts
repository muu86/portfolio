import { useEffect, useRef } from "react";
import { useFlowStore } from "@/lib/flow/context/flow-context-provider";

export function useContainerRef() {
  const updateContainerRect = useFlowStore((s) => s.updateContainerRect);
  const setIsScrolling = useFlowStore((s) => s.setIsScrolling);

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

      console.log(top, left);
      updateContainerRect({ top, right, bottom, left, width, height });
    };

    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(ref.current);

    const updateIsScrolling = () => {
      setIsScrolling(true);

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener("scroll", updateIsScrolling);

    return () => {
      resizeObserver?.disconnect();

      window.removeEventListener("scroll", updateIsScrolling);
    };
    // }, [updateContainerCoordinates, updateContainerDimensions, setIsScrolling]);
  }, [updateContainerRect, setIsScrolling]);

  return ref;
}
