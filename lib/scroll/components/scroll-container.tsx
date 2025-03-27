"use client";

import { PropsWithChildren } from "react";

export function ScrollContainer({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto w-full">
      <div className="relative w-full">{children}</div>
    </div>
  );
}
