import { createStore } from "zustand/vanilla";

export type CollapseState = {
  isCollapsed: boolean;
};

export type CollapseAction = {
  setIsCollapsed: (isCollapsed: boolean) => void;
};

export type CollapseStore = CollapseState & CollapseAction;

export const defaultInitState: CollapseState = {
  isCollapsed: false,
};

export function createCollapseStore(initState: CollapseState = defaultInitState) {
  return createStore<CollapseStore>()((set) => ({
    ...initState,

    setIsCollapsed: (isCollapsed: boolean) => set({ isCollapsed }),
  }));
}
