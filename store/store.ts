import { createStore } from "zustand/vanilla"
import { devtools } from "zustand/middleware/devtools"

export type AppState = {}

export type AppAction = {}

export type AppStore = AppState & AppAction

export function createAppStore() {
  return createStore<AppStore>()(devtools((set) => ({})))
}
