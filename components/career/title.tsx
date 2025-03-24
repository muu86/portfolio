import { PropsWithChildren } from "react";

export function Title({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto flex max-w-4xl">
      {children}
      <div className="self-stretch"></div>
    </div>
  );
}
