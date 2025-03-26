"use client";

import { PropsWithChildren } from "react";
import { useScrollEvent } from "@/lib/scroll/hooks/use-scroll-event";

export function ScrollContainer({ children }: PropsWithChildren) {
  useScrollEvent();

  return (
    <div className="mx-auto w-full">
      <div className="relative w-full">{children}</div>
    </div>
  );
}
