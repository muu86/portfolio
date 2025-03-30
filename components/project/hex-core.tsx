import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type CoreProps = {
  className?: string;
};

export function HexCore({ className, children }: PropsWithChildren<CoreProps>) {
  return <div className={cn("clip-hexagon relative flex items-center justify-center p-4", className)}>{children}</div>;
}
