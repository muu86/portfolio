import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function HexAdaptor({ className, children }: PropsWithChildren<Props>) {
  return (
    <div className={cn("absolute top-1/4 left-11/12 -translate-x-1/2 -translate-y-1/2 bg-gray-50 p-2", className)}>
      {children}
    </div>
  );
}
