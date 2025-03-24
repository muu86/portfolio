"use client";

import { PropsWithChildren } from "react";

export function OuterContainer({ children }: PropsWithChildren) {
  return (
    <div className="sticky top-0 flex h-svh w-full basis-6xl flex-col items-center justify-center">
      {children}
    </div>
  );
}
