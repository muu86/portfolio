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
      <div className="mx-auto flex h-[80px] w-full max-w-4xl flex-col justify-center">{children}</div>
    </div>
  );
}
