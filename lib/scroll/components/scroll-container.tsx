"use client";

import { PropsWithChildren } from "react";
import { useScrollEvent } from "@/lib/scroll/hooks/use-scroll-event";

export function ScrollContainer({ children }: PropsWithChildren) {
  useScrollEvent();

  return <div className="relative flex w-full flex-col justify-center gap-8">{children}</div>;
}
