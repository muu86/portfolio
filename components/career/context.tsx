"use client";

import { createContext, PropsWithChildren, useState } from "react";

export type ProjectContextType = {
  size: number;

  selectedIndex: number;
  setSelectedIndex: (id: number) => void;
};

export const ProjectContext = createContext<ProjectContextType>({} as ProjectContextType);

export function ProjectProvider({ size, children }: PropsWithChildren<{ size: number }>) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const value = {
    size,

    selectedIndex,
    setSelectedIndex,
  } satisfies ProjectContextType;

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}
