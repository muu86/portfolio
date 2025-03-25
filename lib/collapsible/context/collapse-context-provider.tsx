"use client";

import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { useStore } from "zustand";
import { CollapseStore, createCollapseStore } from "@/lib/collapsible/store";

export type CollapseStoreApi = ReturnType<typeof createCollapseStore>;

export const CollapseStoreContext = createContext<CollapseStoreApi | undefined>(undefined);

type Props = {
  isCollapsed?: boolean;
};

export function CollapseStoreProvider({ isCollapsed = false, children }: PropsWithChildren<Props>) {
  const storeRef = useRef<CollapseStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createCollapseStore({
      isCollapsed,
    });
  }

  return <CollapseStoreContext.Provider value={storeRef.current}>{children}</CollapseStoreContext.Provider>;
}

export const useCollapseStore = <T,>(selector: (store: CollapseStore) => T): T => {
  const context = useContext(CollapseStoreContext);

  if (!context) {
    throw new Error(`useCollapseStore must be used within CollapseStoreProvider`);
  }

  return useStore(context, selector);
};
