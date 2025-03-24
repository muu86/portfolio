"use client";

import { PropsWithChildren, useContext } from "react";
import { ProjectContext } from "@/components/career/context";
import { cn } from "@/lib/utils";

export type DocProps = {
  index: number;
};

export function Doc({ index, children }: PropsWithChildren<DocProps>) {
  const { selectedIndex, size } = useContext(ProjectContext);

  return (
    <div
      className={cn(
        "absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center overflow-y-scroll rounded-md bg-white p-4 shadow-sm transition duration-200 ease-in-out",
        { "border-gray-200": selectedIndex !== index },
      )}
      style={{
        zIndex: calculateZIndex(selectedIndex, index, size),
        rotate: `${calculateRotate(selectedIndex, index, size)}rad`,
        translate: `${calculateTranslate(selectedIndex, index, size)}em ${calculateTranslate(selectedIndex, index, size)}em`,
      }}
    >
      {children}
    </div>
  );
}

function getDistance(selectedIndex: number, currIndex: number, size: number) {
  return selectedIndex <= currIndex ? currIndex - selectedIndex : size - selectedIndex + currIndex;
}

function calculateTranslate(selectedIndex: number, currIndex: number, size: number) {
  return getDistance(selectedIndex, currIndex, size);
}

function calculateZIndex(selectedIndex: number, currIndex: number, size: number, baseZIndex: number = 1) {
  return baseZIndex + size - getDistance(selectedIndex, currIndex, size);
}

function calculateRotate(selectedIndex: number, currIndex: number, size: number, maxRadian: number = 0.1) {
  const distance = getDistance(selectedIndex, currIndex, size);

  return (maxRadian / size) * distance;
}
