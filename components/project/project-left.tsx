"use client";

import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function ProjectLeft({ className, children }: PropsWithChildren<Props>) {
  return (
    <div
      className={cn("sticky top-[80px] col-span-8 mt-[80px] flex h-[calc(100svh-80px)] place-items-center", className)}
    >
      {children}
    </div>
  );
}
