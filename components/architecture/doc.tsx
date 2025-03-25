"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";

export type ArchitectureDocProps = {
  id: string;
};

export function ArchitectureDoc({ id, children }: PropsWithChildren<ArchitectureDocProps>) {
  const selectedId = useScrollStore((s) => s.selectedId);
  const isScrolling = useScrollStore((s) => s.isScrolling);

  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (ref.current === null) return;

    if (id !== selectedId) return;

    ref.current.scrollIntoView({ behavior: isScrolling ? "smooth" : "instant", block: "nearest", inline: "center" });
  }, [id, selectedId, isScrolling]);

  return (
    <article ref={ref} className={cn("flex h-svh w-full flex-col justify-center")}>
      {children}
    </article>
  );
}
