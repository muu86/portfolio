import { createStore } from "zustand/vanilla";
import { devtools } from "zustand/middleware";

export type ScrollState = {
  ids: string[];

  selectedIndex: number;

  selectedId: string | null;

  intersectionRect?: DOMRect;

  iy: number;
  ih: number;

  boundingRect?: DOMRect;

  by: number;
  bh: number;

  intersectionObserver?: IntersectionObserver;
};

export type ScrollAction = {
  size: () => number;
  setSelectedIndex: (index: number) => void;
  setSelectedId: (id: string | null) => void;

  setIntersectionRect: (y: number, h: number) => void;
  setBoundingRect: (y: number, h: number) => void;

  next: () => void;
  prev: () => void;

  setIntersectionObserver: (intersectionObserver: IntersectionObserver) => void;
};

export type ScrollStore = ScrollState & ScrollAction;

export const defaultInitState: ScrollState = {
  ids: [],
  selectedIndex: -1,
  selectedId: null,

  iy: 0,
  ih: 0,
  by: 0,
  bh: 0,
};

export function createScrollStore(
  ids: string[],
  initState: ScrollState = defaultInitState,
) {
  return createStore<ScrollStore>()(
    devtools((set, get) => ({
      ...initState,

      ids,

      size: () => get().ids.length,

      setSelectedId: (id: string | null) =>
        set(() => ({
          selectedId: id,
        })),

      setIntersectionRect: (y: number, h: number) =>
        set(() => ({ iy: y, ih: h })),

      setBoundingRect: (y: number, h: number) => set(() => ({ by: y, bh: h })),

      next: () => {
        const { ids, selectedIndex, size } = get();

        console.log(selectedIndex);

        const ni = Math.min(selectedIndex + 1, size() - 1);
        if (selectedIndex !== ni) {
          set(() => ({ selectedIndex: ni, selectedId: ids[ni] }));
        }
      },

      prev: () => {
        const { ids, selectedIndex } = get();

        console.log(selectedIndex);

        const ni = Math.max(selectedIndex - 1, 0);
        if (selectedIndex !== ni) {
          set(() => ({ selectedIndex: ni, selectedId: ids[ni] }));
        }
      },

      setIntersectionObserver: (intersectionObserver: IntersectionObserver) => {
        set(() => ({ intersectionObserver }));
      },
    })),
  );
}
