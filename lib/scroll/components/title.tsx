import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type TitleProps = {
  className?: string;
};

export function Title({ className, children }: PropsWithChildren<TitleProps>) {
  return (
    <div className="absolute h-11/12 w-full">
      <div
        className={cn(
          "bg-background/100 supports-[backdrop-filter]:bg-background/80 sticky top-0 flex h-[80px] w-full backdrop-blur",
          className,
        )}
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col justify-center">{children}</div>
      </div>
    </div>
  );
}
