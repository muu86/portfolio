import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type TitleProps = {
  className?: string;
};

export function Title({ className, children }: PropsWithChildren<TitleProps>) {
  return (
    <div
      className={cn(
        "bg-background/100 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-10 flex w-full flex-col backdrop-blur",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col py-8">{children}</div>
    </div>
  );
}
