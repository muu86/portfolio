"use client";

import Image from "next/image";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";

export type IconProps = {
  id?: string | string[];
  name?: string;
  source: string;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

export function Icon({ id, name, source, width = 32, height = 32, color, className }: PropsWithChildren<IconProps>) {
  const selectedId = useScrollStore((s) => s.selectedId);

  let isSelected: boolean;
  if (!id) {
    isSelected = false;
  } else if (Array.isArray(id)) {
    isSelected = selectedId !== null && id.includes(selectedId);
  } else {
    isSelected = id === selectedId;
  }

  if (name) {
    return (
      <div
        className={cn("flex w-12 flex-col items-center justify-center gap-2 rounded-sm p-2", {
          "ring-4 ring-offset-4": isSelected,
          "ring-aws-charcoal": color === "charcoal",
          "ring-aws-purple": color === "purple",
          "ring-aws-olive": color === "olive",
          "ring-aws-cyan": color === "cyan",
          "ring-aws-orange": color === "orange",
        })}
      >
        <Image
          className={cn(className, { "scale-120": isSelected })}
          src={source}
          alt={source}
          width={width}
          height={height}
          draggable={false}
        />
        <p className={cn("text-center text-xs")}>{name}</p>
      </div>
    );
  }

  return (
    <Image
      className={cn(className, { "scale-110": isSelected })}
      src={source}
      alt={source}
      width={width}
      height={height}
      draggable={false}
    />
  );
}
