import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function Right({ className, children }: PropsWithChildren<Props>) {
  return <div className={cn("relative basis-sm", className)}>{children}</div>;
}
