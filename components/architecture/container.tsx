"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Icon } from "./icon";
import { useScrollStore } from "@/lib/scroll/context/scroll-context-provider";

export type ContainerProps = {
  id?: string;
  title?: string;
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
  className?: string;
};

export function Container({
  id,
  title,
  icon,
  iconWidth = 32,
  iconHeight = 32,
  className,
  children,
}: PropsWithChildren<ContainerProps>) {
  const selectedId = useScrollStore((s) => s.selectedId);
  const isSelected = id && id === selectedId;

  const color = icon?.split("_").at(-1);

  return (
    <div
      className={cn(
        "relative flex min-h-48 w-full max-w-4xl flex-col overflow-hidden rounded-sm ring transition duration-100",
        {
          ...(isSelected
            ? {
                "ring-aws-charcoal": color === "charcoal",
                "ring-aws-purple": color === "purple",
                "ring-aws-olive": color === "olive",
                "ring-aws-cyan": color === "cyan",
                "ring-aws-orange": color === "orange",
              }
            : {
                "ring-aws-charcoal-dimmed": color === "charcoal",
                "ring-aws-purple-dimmed": color === "purple",
                "ring-aws-olive-dimmed": color === "olive",
                "ring-aws-cyan-dimmed": color === "cyan",
                "ring-aws-orange-dimmed": color === "orange",
              }),
        },
        isSelected ? "ring-2" : "ring",
        isSelected ? "shadow-2xl" : "shadow-none",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {icon && <Icon id={id} icon={icon} width={iconWidth} height={iconHeight} />}
        <p
          className={cn({
            ...(isSelected
              ? {
                  "text-aws-charcoal": color === "charcoal",
                  "text-aws-purple": color === "purple",
                  "text-aws-olive": color === "olive",
                  "text-aws-cyan": color === "cyan",
                  "text-aws-orange": color === "orange",
                }
              : {
                  "text-aws-charcoal-dimmed": color === "charcoal",
                  "text-aws-purple-dimmed": color === "purple",
                  "text-aws-olive-dimmed": color === "olive",
                  "text-aws-cyan-dimmed": color === "cyan",
                  "text-aws-orange-dimmed": color === "orange",
                }),
          })}
        >
          {title}
        </p>
      </div>
      {children && <div className="flex grow items-center justify-center gap-4 px-4 pt-8 pb-4">{children}</div>}
    </div>
  );
}
