import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function Left({ className, children }: PropsWithChildren<Props>) {
  return (
    <div className={cn("sticky top-0 flex h-svh grow flex-col items-center justify-center", className)}>{children}</div>
  );
}
