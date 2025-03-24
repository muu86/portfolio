import { PropsWithChildren } from "react";

export function DocContainer({ children }: PropsWithChildren) {
  return <article className="relative min-h-96 w-full">{children}</article>;
}
