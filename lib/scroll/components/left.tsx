"use client";

import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function Left({ className, children }: PropsWithChildren<Props>) {
  return <div className={cn("sticky top-0 h-svh grow pt-[80px]", className)}>{children}</div>;
}
