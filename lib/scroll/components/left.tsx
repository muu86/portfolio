"use client";

import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function Left({ className, children }: PropsWithChildren<Props>) {
  return <div className={cn("sticky top-[80px] h-[calc(100svh-80px)] grow", className)}>{children}</div>;
}
