import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"span"> & {
  className?: string;
  children?: string;
};

export function String({ className, children }: Props) {
  return (
    <>
      {/*<span className={cn('text-gray-400 text-xl', className)}>“</span>*/}
      <span className={cn("text-xl font-bold text-black dark:text-gray-50", className)}>{children}</span>
      {/*<span className={cn('text-gray-400 text-xl', className)}>”</span>*/}
    </>
  );
}
