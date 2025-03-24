import { useEffect, useRef } from "react";
import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";

export function useIntersectionObserver() {
  const setSelectedId = useScrollStore((s) => s.setSelectedId);

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
        rootMargin: "-40% 0% -50% 0%",
      },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  });

  return ref;
}
