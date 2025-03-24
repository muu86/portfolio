import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type ExternalProps = {
  className?: string;
};

export function External({
  className,
  children,
}: PropsWithChildren<ExternalProps>) {
  return (
    <div
      className={cn(
        "border-aws-charcoal flex items-center justify-center border p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
