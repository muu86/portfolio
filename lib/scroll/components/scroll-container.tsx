import { PropsWithChildren } from "react";

export function ScrollContainer({ children }: PropsWithChildren) {
  return <div className="relative w-full">{children}</div>;
}
