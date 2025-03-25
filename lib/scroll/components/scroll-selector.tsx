"use client";

import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";
import { MouseEventHandler, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useFlowStore } from "@/lib/flow/context/flow-context-provider";

type ScrollSelectorProps = {
  id: string;
  title?: string;
  className?: string;
};

export function ScrollSelector({ id, title }: PropsWithChildren<ScrollSelectorProps>) {
  const selectedId = useScrollStore((s) => s.selectedId);
  const setSelectedId = useScrollStore((s) => s.setSelectedId);

  const edgeMap = useScrollStore((s) => s.edgeMap);
  const edges = useFlowStore((s) => s.edges);
  const setSelectedEdgeIndex = useFlowStore((s) => s.setSelectedEdgeIndex);

  const onClickHandler: MouseEventHandler<HTMLDivElement> = () => {
    setSelectedId(id);

    const edge = edgeMap?.get(id);
    if (!edge) {
      setSelectedEdgeIndex(-1);
    } else {
      const { source, target } = edge;
      setSelectedEdgeIndex(edges.findIndex((edge) => edge.sourceId === source && edge.targetId === target));
    }
  };

  return (
    <div
      onClick={onClickHandler}
      className={cn("cursor-pointer p-2 text-sm text-nowrap text-gray-400 hover:text-black", {
        "text-black": selectedId === id,
      })}
    >
      {title}
    </div>
  );
}
