"use client";

import { useFlowStore } from "@/lib/flow/context/flow-context-provider";
import { PropsWithChildren, useEffect } from "react";
import { EdgeType, Position } from "@/lib/flow/types";
import { useAddEdges } from "@/lib/flow/components/node/use-add-edges";
import { useNode } from "@/lib/flow/components/node/use-node";

export type NodeEdge = {
  id: string;
  position?: Position;
  type?: EdgeType;
  hidden?: boolean;
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
  const mutationObserver = useFlowStore((s) => s.mutationObserver);

  const ref = useNode(id, canStick);
  useAddEdges({ id, position, edges });

  useEffect(() => {
    if (!ref.current) return;

    mutationObserver?.observe(ref.current, { attributes: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutationObserver]);

  return (
    <div data-node-id={id} ref={ref} className={className}>
      {children}
    </div>
  );
}
