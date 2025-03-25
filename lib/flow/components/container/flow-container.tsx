"use client";

import { useMutationObserver } from "@/lib/flow/components/container/use-mutation-observer";
import { PropsWithChildren } from "react";
import { useContainerRef } from "@/lib/flow/components/container/use-container-ref";
import { EdgeRenderer } from "@/lib/flow/components/container/edge-renderer";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function FlowContainer({ className, children }: PropsWithChildren<Props>) {
  const ref = useContainerRef();
  useMutationObserver();

  return (
    <div ref={ref} className={cn("relative", className)}>
      {children}

      <EdgeRenderer />
    </div>
  );
}
