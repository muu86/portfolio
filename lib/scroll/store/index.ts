import { createStore } from "zustand/vanilla";
import { devtools } from "zustand/middleware";

export type ScrollState = {
  ids: string[];
  selectedId: string | null;
  idToEdges: Map<string, { source: string; target: string }[]> | null;
  isScrolling: boolean;
};

export type ScrollAction = {
  size: () => number;
  updateSelectedId: (id: string | null) => void;
};

export type ScrollStore = ScrollState & ScrollAction;

export const defaultInitState: ScrollState = {
  ids: [],
  selectedId: null,
  idToEdges: null,

  isScrolling: false,
};

export function createScrollStore(initState: ScrollState = defaultInitState) {
  return createStore<ScrollStore>()(
    devtools((set, get) => ({
      ...initState,

      size: () => get().ids.length,

      updateSelectedId: (id: string | null) =>
        set(() => ({
          selectedId: id,
        })),
    })),
  );
}
