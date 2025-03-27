import { PropsWithChildren } from "react";

export function Statement({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <br />
    </>
  );
}
