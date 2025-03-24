import { useEffect, useRef } from "react";
import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";

export function useIntersectionObserver2() {
  const setSelectedId = useScrollStore((s) => s.setSelectedId);
  const setIntersectionObserver = useScrollStore(
    (s) => s.setIntersectionObserver,
  );

  const prevScrollY = useRef<number>(0);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isScrollDown = window.scrollY > prevScrollY.current;
        prevScrollY.current = window.scrollY;

        console.log(isScrollDown);

        const entry = entries.reduce((acc, cur) => {
          // if (acc.isIntersecting) {
          //   console.log(acc.intersectionRect.y, acc.intersectionRect.height);
          // }
          //
          // if (cur.isIntersecting) {
          //   console.log(cur.intersectionRect.y, cur.intersectionRect.height);
          // }
          if (acc.isIntersecting && cur.isIntersecting) {
            if (isScrollDown) {
              return acc.boundingClientRect.y > cur.boundingClientRect.y
                ? acc
                : cur;
            }
            return acc.boundingClientRect.y < cur.boundingClientRect.y
              ? acc
              : cur;
          }

          return acc.isIntersecting ? acc : cur;
        });

        if (!entry.isIntersecting) {
          return;
        }

        setSelectedId(entry.target.getAttribute("data-scroll-id"));
      },
      {
        root: null,
        rootMargin: "-30% 0% -60% 0%",
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
      },
    );

    setIntersectionObserver(observer);

    return () => {
      observer.disconnect();
    };
  });
}
