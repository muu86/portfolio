import { useEffect, useRef } from "react";
import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";

export function useIntersectionObserver() {
  const setSelectedId = useScrollStore((s) => s.updateSelectedId);

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
            setSelectedId(entry.target.getAttribute("data-scroll-id"));
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
  }, [setSelectedId]);

  return ref;
}
