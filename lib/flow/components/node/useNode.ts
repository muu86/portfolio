import { useFlowStore } from "@/lib/flow/context/flow-context-provider";
import { useEffect, useRef } from "react";

export function useNode(id: string, canStick: boolean) {
  const ref = useRef<HTMLDivElement | null>(null);

  const updateNodes = useFlowStore((s) => s.updateNodes);

  useEffect(() => {
    const updateNode = () => {
      if (ref.current === null) return;

      const { top, right, bottom, left, width, height } = ref.current.getBoundingClientRect();
      updateNodes([
        {
          id,
          rect: {
            top: top + window.scrollY,
            right: right,
            bottom: bottom + window.scrollY,
            left: left,
            width,
            height,
          },
        },
      ]);
    };

    updateNode();

    if (canStick) {
      window.addEventListener("scroll", updateNode);

      requestAnimationFrame(updateNode);
    }
    window.addEventListener("resize", updateNode);

    return () => {
      if (canStick) {
        window.removeEventListener("scroll", updateNode);
      }
      window.addEventListener("resize", updateNode);
    };
  }, [id, canStick, updateNodes]);

  return ref;
}
