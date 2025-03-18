import { create } from "zustand";

type AppState = {
  count: number;
  setCount: (value: number) => void;
};

export const useAppStore = create<AppState>((set) => ({
  count: 0,
  setCount: (value: number) => set(() => ({ count: value })),
}));
