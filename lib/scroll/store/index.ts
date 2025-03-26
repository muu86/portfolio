import { createStore } from "zustand/vanilla";
import { devtools } from "zustand/middleware";

export type ScrollState = {
  ids: string[];
  selectedIndex: number;
  selectedId: string | null;

  edgeMap: Map<string, { source: string; target: string }[]> | null;

  isScrolling: boolean;
};

export type ScrollAction = {
  size: () => number;
  setSelectedIndex: (index: number) => void;
  setSelectedId: (id: string | null) => void;
  setIsScrolling: (isScrolling: boolean) => void;
};

export type ScrollStore = ScrollState & ScrollAction;

export const defaultInitState: ScrollState = {
  ids: [],
  selectedIndex: -1,
  selectedId: null,
  edgeMap: null,

  isScrolling: false,
};

export function createScrollStore(initState: ScrollState = defaultInitState) {
  return createStore<ScrollStore>()(
    devtools((set, get) => ({
      ...initState,

      size: () => get().ids.length,

      setSelectedId: (id: string | null) =>
        set(() => ({
          selectedId: id,
        })),

      setIsScrolling: (isScrolling: boolean) => set({ isScrolling }),
    })),
  );
}
