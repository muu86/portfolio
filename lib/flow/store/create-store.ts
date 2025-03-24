import { createStore } from "zustand/vanilla";
import { devtools } from "zustand/middleware";
import { Coordinates, Dimension, Edge, Node, NodeUpdate } from "@/lib/flow/common/types";

export type FlowState = {
  nodes: Map<string, Node>;
  edges: Edge[];

  x: number;
  y: number;
  width: number;
  height: number;

  resizeObserver: ResizeObserver | null;
  mutationObserver: MutationObserver | null;

  isScrolling: boolean;
};

export type FlowAction = {
  addNode: (node: Node) => void;
  addEdge: (edge: Edge) => void;

  updateNodes: (updates: NodeUpdate[]) => void;
  updateContainerCoordinates: (coordinates: Coordinates) => void;
  updateContainerDimensions: (dimension: Dimension) => void;

  setResizeObserver: (resizeObserver: ResizeObserver | null) => void;
  setMutationObserver: (mutationObserver: MutationObserver | null) => void;

  setIsScrolling: (isScrolling: boolean) => void;
};

export type FlowStore = FlowState & FlowAction;

export const defaultInitState: FlowState = {
  nodes: new Map<string, Node>(),
  edges: [],

  x: 0,
  y: 0,
  width: 500,
  height: 500,

  resizeObserver: null,
  mutationObserver: null,

  isScrolling: false,
};

export function createFlowStore(initState: FlowState = defaultInitState) {
  return createStore<FlowStore>()(
    devtools(
      (set, get) => ({
        ...initState,

        addNode: (node: Node) => {
          set((s) => ({ nodes: new Map(s.nodes).set(node.id, node) }));
        },

        addEdge: (edge: Edge) => {
          const { edges } = get();
          if (edges.find((e) => e.sourceId === edge.sourceId && e.targetId === edge.targetId) === undefined) {
            set((s) => ({ edges: [...s.edges, edge] }));
          }
        },

        updateNodes: (updates: NodeUpdate[]) => {
          const { nodes } = get();
          for (const update of updates) {
            const { id } = update;
            const { top, right, bottom, left, width, height } = update.rect;
            nodes.set(id, {
              id,
              top,
              right,
              bottom,
              left,
              width,
              height,
            });
          }

          set({ nodes: new Map(nodes) });
        },

        updateContainerCoordinates: ({ x, y }: Coordinates) => {
          set({ x, y });
        },

        updateContainerDimensions: ({ width, height }: Dimension) => {
          set({ width, height });
        },

        setResizeObserver: (resizeObserver: ResizeObserver | null) => {
          set({ resizeObserver });
        },

        setMutationObserver: (mutationObserver: MutationObserver | null) => {
          set({ mutationObserver });
        },

        setIsScrolling: (isScrolling: boolean) => {
          set({ isScrolling });
        },
      }),
      {
        name: "node-store",
        serialize: {
          replacer: (key, value) => (value instanceof Map ? [...value] : value),
        },
      },
    ),
  );
}
