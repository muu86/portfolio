import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type ExternalItemProps = {
  title?: string;
  className?: string;
};

export function ExternalItem({
  title,
  className,
  children,
}: PropsWithChildren<ExternalItemProps>) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2",
        className,
      )}
    >
      {children}
      <h4 className="text-xs font-semibold">{title}</h4>
    </div>
  );
}
