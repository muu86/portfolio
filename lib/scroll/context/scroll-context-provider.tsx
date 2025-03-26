"use client";

import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { useStore } from "zustand";
import { createScrollStore, defaultInitState, ScrollStore } from "@/lib/scroll/store";

export type ScrollStoreApi = ReturnType<typeof createScrollStore>;

export const ScrollStoreContext = createContext<ScrollStoreApi | undefined>(undefined);

export type ScrollStoreProviderProps = {
  ids: string[];
  edgeMap?: Record<string, { source: string; target: string }[]>;
};

export function ScrollStoreProvider({ ids, edgeMap, children }: PropsWithChildren<ScrollStoreProviderProps>) {
  const storeRef = useRef<ScrollStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createScrollStore({
      ...defaultInitState,
      ids,
      edgeMap: edgeMap ? new Map(Object.entries(edgeMap)) : null,
    });
  }

  return <ScrollStoreContext.Provider value={storeRef.current}>{children}</ScrollStoreContext.Provider>;
}

export const useScrollStore = <T,>(selector: (store: ScrollStore) => T): T => {
  const context = useContext(ScrollStoreContext);

  if (!context) {
    throw new Error(`useScrollStore must be used within ScrollStoreProvider`);
  }

  return useStore(context, selector);
};
