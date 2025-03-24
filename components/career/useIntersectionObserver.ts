import { useContext, useEffect, useRef } from "react";
import { ProjectContext } from "@/components/career/context";

export function useIntersectionObserver(index: number) {
  const { setSelectedIndex } = useContext(ProjectContext);

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
            setSelectedIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0% -40% 0%",
        threshold: [0.1, 1.0],
      },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  });

  return ref;
}
