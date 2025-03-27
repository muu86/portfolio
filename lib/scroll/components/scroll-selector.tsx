"use client";

import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";
import { MouseEventHandler, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type ScrollSelectorProps = {
  id: string;
  title?: string;
  className?: string;
};

export function ScrollSelector({ id, title }: PropsWithChildren<ScrollSelectorProps>) {
  const selectedId = useScrollStore((s) => s.selectedId);
  const setSelectedId = useScrollStore((s) => s.updateSelectedId);

  const onClickHandler: MouseEventHandler<HTMLDivElement> = () => {
    setSelectedId(id);
  };

  return (
    <div
      onClick={onClickHandler}
      className={cn("cursor-pointer p-2 text-sm text-wrap text-gray-400 hover:text-black", {
        "text-black": selectedId === id,
      })}
    >
      {title}
    </div>
  );
}
