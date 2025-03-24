import { PropsWithChildren } from "react";

export function StickyScroller({ children }: PropsWithChildren) {
  return <div className="relative flex w-full snap-y flex-col justify-center gap-8">{children}</div>;
}
