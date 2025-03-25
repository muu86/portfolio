"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { useCollapseStore } from "@/lib/collapsible/context/collapse-context-provider";

export function CollapsibleContainer({ children }: PropsWithChildren) {
  const isCollapsed = useCollapseStore((s) => s.isCollapsed);
  const setIsCollapsed = useCollapseStore((s) => s.setIsCollapsed);

  return (
    <div>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>collapse</button>
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
