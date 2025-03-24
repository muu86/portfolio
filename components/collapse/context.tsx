"use client";

import { createContext, PropsWithChildren, useReducer } from "react";

export type CollapseContextType = {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
};

export const CollapseContext = createContext<CollapseContextType>({} as CollapseContextType);

export function CollapseContextProvider({ children }: PropsWithChildren) {
  const [isCollapsed, toggleCollapsed] = useReducer((isCollapsed) => !isCollapsed, false);

  return <CollapseContext.Provider value={{ isCollapsed, toggleCollapsed }}>{children}</CollapseContext.Provider>;
}
