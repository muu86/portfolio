import { PropsWithChildren } from "react";

export function ScrollInnerContainer({ children }: PropsWithChildren) {
  return <div className="mx-auto flex w-full max-w-6xl gap-4">{children}</div>;
}
