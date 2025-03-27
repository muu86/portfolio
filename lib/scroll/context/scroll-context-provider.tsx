"use client";

import { createContext, PropsWithChildren, useContext, useEffect, useRef } from "react";
import { useStore } from "zustand";
import { createScrollStore, defaultInitState, ScrollStore } from "@/lib/scroll/store";
import { IdToEdges } from "@/config/id-to-edges";

export type ScrollStoreApi = ReturnType<typeof createScrollStore>;

export const ScrollStoreContext = createContext<ScrollStoreApi | undefined>(undefined);

export type ScrollStoreProviderProps = {
  ids: string[];
  idToEdges?: IdToEdges;
};

export function ScrollStoreProvider({ ids, idToEdges, children }: PropsWithChildren<ScrollStoreProviderProps>) {
  const storeRef = useRef<ScrollStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createScrollStore({
      ...defaultInitState,
      ids,
      idToEdges: idToEdges ? new Map(Object.entries(idToEdges)) : null,
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      storeRef.current?.setState({ isScrolling: true });

      setTimeout(() => {
        storeRef.current?.setState({ isScrolling: false });
      }, 200);
    });
  }, []);

  return <ScrollStoreContext.Provider value={storeRef.current}>{children}</ScrollStoreContext.Provider>;
}

export const useScrollStore = <T,>(selector: (store: ScrollStore) => T): T => {
  const context = useContext(ScrollStoreContext);

  if (!context) {
    throw new Error(`useScrollStore must be used within ScrollStoreProvider`);
  }

  return useStore(context, selector);
};
