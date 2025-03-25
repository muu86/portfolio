"use client";

import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { useStore } from "zustand";
import { createFlowStore, FlowStore } from "@/lib/flow/store";

export type FlowStoreApi = ReturnType<typeof createFlowStore>;

export const FlowStoreContext = createContext<FlowStoreApi | undefined>(undefined);

export function FlowStoreProvider({ children }: PropsWithChildren) {
  const storeRef = useRef<FlowStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createFlowStore();
  }

  return <FlowStoreContext.Provider value={storeRef.current}>{children}</FlowStoreContext.Provider>;
}

export const useFlowStore = <T,>(selector: (store: FlowStore) => T): T => {
  const flowStoreContext = useContext(FlowStoreContext);

  if (!flowStoreContext) {
    throw new Error(`useFlowStore must be used within FlowStoreProvider`);
  }

  return useStore(flowStoreContext, selector);
};
