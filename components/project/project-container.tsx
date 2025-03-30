"use client";

import { PropsWithChildren } from "react";

export function ProjectContainer({ children }: PropsWithChildren) {
  return <div className="relative mx-auto w-full">{children}</div>;
}
