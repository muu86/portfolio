"use client";

import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useCollapseStore } from "@/lib/collapsible/context/collapse-context-provider";

type Props = {
  className?: string;
};

export function Collapsible({ className, children }: PropsWithChildren<Props>) {
  const isCollapsed = useCollapseStore((s) => s.isCollapsed);

  return <div className={cn({ hidden: isCollapsed }, className)}>{children}</div>;
}
