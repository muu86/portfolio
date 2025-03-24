"use client";

import { PropsWithChildren, useContext } from "react";
import { CollapseContext } from "@/components/collapse/context";
import { cn } from "@/lib/utils";

export function Collapsible({ children }: PropsWithChildren) {
  const { isCollapsed } = useContext(CollapseContext);

  return <div className={cn("max-w-svw", { hidden: isCollapsed })}>{children}</div>;
}
