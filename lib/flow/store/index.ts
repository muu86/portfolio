import { createStore } from "zustand/vanilla";
import { devtools } from "zustand/middleware";
import { Edge, Node, NodeUpdate, Rect } from "@/lib/flow/common/types";

export type FlowState = {
  nodes: Map<string, Node>;
  edges: Edge[];

  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;

  mutationObserver: MutationObserver | null;

  selectedEdges: Edge[];
  selectedEdgeIndex: number;
};

export type FlowAction = {
  addNode: (node: Node) => void;
  addEdge: (edge: Edge) => void;

  updateNodes: (updates: NodeUpdate[]) => void;

  updateContainerRect: (rect: Rect) => void;

  setMutationObserver: (mutationObserver: MutationObserver | null) => void;

  setSelectedEdgeIndex: (index: number) => void;

  updateSelectedEdges: (edges: Edge[]) => void;
};

export type FlowStore = FlowState & FlowAction;

export const defaultInitState: FlowState = {
  nodes: new Map<string, Node>(),
  edges: [],

  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 500,
  height: 500,

  mutationObserver: null,

  selectedEdges: [],
  selectedEdgeIndex: -1,
};

export function createFlowStore(initState: FlowState = defaultInitState) {
  return createStore<FlowStore>()(
    devtools(
      (set, get) => ({
        ...initState,

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

        updateContainerRect: ({ top, right, bottom, left, width, height }: Rect) => {
          set({ top, right, bottom, left, width, height });
        },

        setMutationObserver: (mutationObserver: MutationObserver | null) => {
          set({ mutationObserver });
        },

        updateSelectedEdges: (edges: Edge[]) => {
          set({ selectedEdges: edges });
        },

        setSelectedEdgeIndex: (index: number) => {
          set({ selectedEdgeIndex: index });
        },
      }),
      // {
      //   name: "node-store",
      //   serialize: {
      //     replacer: (key, value) => (value instanceof Map ? [...value] : value),
      //   },
      // },
    ),
  );
}
