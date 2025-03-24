"use client";

import Image from "next/image";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";

export type IconProps = {
  id?: string;
  name?: string;
  icon: string;
  width?: number;
  height?: number;
  className?: string;
};

export function Icon({ id, name, icon, width = 32, height = 32, className }: PropsWithChildren<IconProps>) {
  const selectedId = useScrollStore((s) => s.selectedId);

  if (name) {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          className={cn(id === selectedId ? "opacity-100" : "opacity-40", className)}
          src={`/aws/${icon}.svg`}
          alt={icon}
          width={width}
          height={height}
          draggable={false}
        />
        <p className={cn("text-center text-xs", { "text-gray-400": id !== selectedId })}>{name}</p>
      </div>
    );
  }

  return (
    <Image
      className={cn(id === selectedId ? "opacity-100" : "opacity-40", className)}
      src={`/aws/${icon}.svg`}
      alt={icon}
      width={width}
      height={height}
      draggable={false}
    />
  );
}
