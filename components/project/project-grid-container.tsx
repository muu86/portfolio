import { PropsWithChildren } from "react";

export function ProjectGridContainer({ children }: PropsWithChildren) {
  return <div className="mx-auto grid w-full max-w-5xl grid-cols-12 gap-8">{children}</div>;
}
