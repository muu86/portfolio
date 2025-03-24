"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";

export type ArchitectureDocProps = {
  id: string;
};

export function ArchitectureDoc({ id, children }: PropsWithChildren<ArchitectureDocProps>) {
  const selectedId = useScrollStore((s) => s.selectedId);
  const ref = useRef<HTMLElement | null>(null);

  const observer = useScrollStore((s) => s.intersectionObserver);

  useEffect(() => {
    if (ref.current === null) return;

    observer?.observe(ref.current);

    return () => {
      observer?.disconnect();
    };
  }, [observer]);

  useEffect(() => {
    if (ref.current === null) return;

    if (id !== selectedId) return;

    ref.current.scrollIntoView({ behavior: "instant", block: "nearest", inline: "center" });
  }, [id, selectedId]);

  return (
    <article ref={ref} className={cn("flex h-svh w-full flex-col justify-center")}>
      {children}
    </article>
  );
}
