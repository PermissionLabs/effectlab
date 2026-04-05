export const usage = {
  install: "bun add zustand",
  tsx: `"use client";

import { create } from "zustand";

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useCounter = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
  decrement: () => set((s) => ({ count: s.count - 1 })),
}));

export default function CounterExample() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="flex items-center gap-4">
      <button onClick={decrement} className="px-3 py-1 bg-white/10 rounded text-white">
        -
      </button>
      <span className="text-2xl font-bold text-white tabular-nums">{count}</span>
      <button onClick={increment} className="px-3 py-1 bg-violet-600 rounded text-white">
        +
      </button>
    </div>
  );
}`,
};
