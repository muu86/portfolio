"use client";

import { PropsWithChildren } from "react";
import { useIntersectionObserver } from "@/lib/scroll/hooks/useIntersectionObserver";

export type ScrollItemProps = {
  id: string;
};

export function ScrollItem({ id, children }: PropsWithChildren<ScrollItemProps>) {
  const ref = useIntersectionObserver();

  return (
    <div ref={ref} data-scroll-id={id}>
      {children}
    </div>
  );
}
