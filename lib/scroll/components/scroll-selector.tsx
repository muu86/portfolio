"use client";

import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type ScrollSelectorProps = {
  id: string;
  className?: string;
};

export function ScrollSelector({ id, className, children }: PropsWithChildren<ScrollSelectorProps>) {
  const selectedId = useScrollStore((s) => s.selectedId);
  const setSelectedId = useScrollStore((s) => s.setSelectedId);

  return (
    <div
      className={cn("cursor-pointer", { underline: id === selectedId }, className)}
      onClick={() => setSelectedId(id)}
    >
      {children}
    </div>
  );
}
