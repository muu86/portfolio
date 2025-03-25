import { useFlowStore } from "@/lib/flow/context/flow-context-provider";
import { useEffect, useRef } from "react";

export function useNode(id: string, canStick: boolean) {
  const ref = useRef<HTMLDivElement | null>(null);

  const ct = useFlowStore((s) => s.top);
  const cr = useFlowStore((s) => s.right);
  const cb = useFlowStore((s) => s.bottom);
  const cl = useFlowStore((s) => s.left);
  const updateNodes = useFlowStore((s) => s.updateNodes);

  useEffect(() => {
    const updateNode = () => {
      if (ref.current === null) return;

      const { top, right, bottom, left, width, height } = ref.current.getBoundingClientRect();
      updateNodes([
        {
          id,
          rect: {
            top: top - ct,
            right: right - cl,
            bottom: cb - bottom,
            left: left - cl,
            width,
            height,
          },
        },
      ]);
    };

    updateNode();

    if (canStick) {
      // window.addEventListener("scroll", updateNode);
      // requestAnimationFrame(updateNode);
    }
    // window.addEventListener("resize", updateNode);

    return () => {
      if (canStick) {
        // window.removeEventListener("scroll", updateNode);
      }
      // window.addEventListener("resize", updateNode);
    };
  }, [id, ct, cl, cr, cb, canStick, updateNodes]);

  return ref;
}
