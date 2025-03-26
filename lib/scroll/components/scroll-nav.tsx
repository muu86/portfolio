import { PropsWithChildren } from "react";

export function ScrollNav({ children }: PropsWithChildren) {
  return (
    <div className="absolute top-0 hidden h-full grow-0 2xl:flex">
      <div className="sticky top-[80px] flex h-[calc(100svh-80px)] w-full flex-col items-start justify-center gap-8">
        {children}
      </div>
    </div>
  );
}
