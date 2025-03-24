"use client";

import { PropsWithChildren, useContext } from "react";
import { useIntersectionObserver } from "@/components/career/useIntersectionObserver";
import { ProjectContext } from "@/components/career/context";

export type ItemProps = {
  index: number;
};

export function Item({ index, children }: PropsWithChildren<ItemProps>) {
  const { setSelectedIndex } = useContext(ProjectContext);
  const ref = useIntersectionObserver(index);

  return (
    <div
      ref={ref}
      data-item-index={index}
      onClick={() => setSelectedIndex(index)}
    >
      {children}
    </div>
  );
}
