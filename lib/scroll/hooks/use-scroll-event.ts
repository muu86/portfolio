import { useEffect } from "react";
import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";

export function useScrollEvent() {
  const setIsScrolling = useScrollStore((s) => s.setIsScrolling);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolling(true);

      setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    });
  }, [setIsScrolling]);
}
