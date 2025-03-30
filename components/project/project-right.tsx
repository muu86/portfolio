import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function ProjectRight({ className, children }: PropsWithChildren<Props>) {
  return <div className={cn("relative col-span-4 basis-sm", className)}>{children}</div>;
}
