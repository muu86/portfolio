import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"span"> & {
  className?: string;
  children?: string;
};

export function String({ className, children }: Props) {
  return (
    <>
      <span className={cn("font-bold text-black dark:text-gray-50", className)}>{children}</span>
    </>
  );
}
