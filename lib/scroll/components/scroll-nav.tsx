import { PropsWithChildren } from "react";

export function ScrollNav({ children }: PropsWithChildren) {
  return <div className="sticky top-0 flex h-svh flex-col items-start justify-center gap-8">{children}</div>;
}
