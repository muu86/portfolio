import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type CoreProps = {
  className?: string;
};

export function Core({ className, children }: PropsWithChildren<CoreProps>) {
  return (
    <div
      className={cn(
        "clip-hexagon relative flex aspect-square items-center justify-center p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
