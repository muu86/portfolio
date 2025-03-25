import { PropsWithChildren } from "react";

export function InternalItem({ children }: PropsWithChildren) {
  return <div className="flex items-center justify-center">{children}</div>;
}
