import { PropsWithChildren } from "react";

export function ScrollInnerContainer({ children }: PropsWithChildren) {
  return <div className="mx-auto flex w-full max-w-5xl gap-12">{children}</div>;
}
