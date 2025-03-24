"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren, useContext } from "react";
import { CollapseContext } from "@/components/collapse/context";

export function CollapsibleContainer({ children }: PropsWithChildren) {
  const { isCollapsed, toggleCollapsed } = useContext(CollapseContext);

  return (
    <div>
      <button onClick={toggleCollapsed}>collapse</button>
      <main
        className={cn("relative flex h-[80vh] items-center justify-center transition-all", {
          "h-0 opacity-0": isCollapsed,
        })}
      >
        {children}
      </main>
    </div>
  );
}
