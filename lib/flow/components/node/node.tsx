"use client";

import { useFlowStore } from "@/lib/flow/context/flow-context-provider";
import { PropsWithChildren, useEffect } from "react";
import { Position } from "../../common/types";
import { useNode } from "@/lib/flow/components/node/useNode";
import { useAddEdges } from "@/lib/flow/components/node/useAddEdges";

export type NodeEdge = {
  id: string;
  position?: Position;
  type?: string;
};

type NodeProps = {
  id: string;
  position?: Position;
  edges?: NodeEdge[];
  canStick?: boolean;
  className?: string;
};

export function Node({
  id,
  position = Position.Right,
  edges = [],
  canStick = true,
  className,
  children,
}: PropsWithChildren<NodeProps>) {
  const resizeObserver = useFlowStore((s) => s.resizeObserver);
  const mutationObserver = useFlowStore((s) => s.mutationObserver);

  const ref = useNode(id, canStick);
  useAddEdges({ id, position, edges });

  useEffect(() => {
    if (!ref.current) return;

    resizeObserver?.observe(ref.current);
    mutationObserver?.observe(ref.current, { attributes: true });
  }, [resizeObserver, mutationObserver]);

  return (
    <div data-node-id={id} ref={ref} className={className}>
      {children}
    </div>
  );
}
