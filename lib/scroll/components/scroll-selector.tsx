"use client";

import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";
import { MouseEventHandler, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useFlowStore } from "@/lib/flow/context/flow-context-provider";
import { Edge } from "@/lib/flow/common/types";

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
  const setSelectedEdges = useFlowStore((s) => s.updateSelectedEdges);

  const onClickHandler: MouseEventHandler<HTMLDivElement> = () => {
    setSelectedId(id);

    const selectedEdges = edgeMap?.get(id);
    if (!selectedEdges) {
      setSelectedEdges([]);
    } else {
      setSelectedEdges(
        selectedEdges.reduce<Edge[]>((acc, curr) => {
          const found = edges.find((e) => e.sourceId === curr.source && e.targetId === curr.target);
          if (found) {
            acc.push(found);
          }
          return acc;
        }, []),
      );
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
