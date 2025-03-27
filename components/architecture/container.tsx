"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Icon } from "./icon";
import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";

export type ContainerProps = {
  id?: string | string[];
  title?: string;
  source?: string;
  iconWidth?: number;
  iconHeight?: number;
  color?: "charcoal" | "purple" | "olive" | "cyan" | "orange";
  className?: string;
};

export function Container({
  id,
  title,
  source,
  iconWidth = 32,
  iconHeight = 32,
  color,
  className,
  children,
}: PropsWithChildren<ContainerProps>) {
  const selectedId = useScrollStore((s) => s.selectedId);

  let isSelected: boolean;
  if (!id) {
    isSelected = false;
  } else if (Array.isArray(id)) {
    isSelected = selectedId !== null && id.includes(selectedId);
  } else {
    isSelected = id === selectedId;
  }

  return (
    <div
      className={cn(
        "relative flex w-full max-w-4xl flex-col overflow-hidden rounded-sm ring transition duration-100",
        {
          "ring-aws-charcoal": color === "charcoal",
          "ring-aws-purple": color === "purple",
          "ring-aws-olive": color === "olive",
          "ring-aws-cyan": color === "cyan",
          "ring-aws-orange": color === "orange",
        },
        isSelected ? "ring-4" : "ring",
        isSelected ? "shadow-2xl" : "shadow-none",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {source && <Icon className="self-start" id={id} source={source} width={iconWidth} height={iconHeight} />}
        <p
          className={cn({
            "text-aws-charcoal": color === "charcoal",
            "text-aws-purple": color === "purple",
            "text-aws-olive": color === "olive",
            "text-aws-cyan": color === "cyan",
            "text-aws-orange": color === "orange",
          })}
        >
          {title}
        </p>
      </div>
      {children && <div className="flex grow items-center justify-center gap-4 px-4 pt-8 pb-4">{children}</div>}
    </div>
  );
}
