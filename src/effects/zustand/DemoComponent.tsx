"use client";

import { create } from "zustand";

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
  decrement: () => set((s) => ({ count: s.count - 1 })),
  reset: () => set({ count: 0 }),
}));

function CountDisplay() {
  const count = useCounterStore((s) => s.count);
  return (
    <div className="flex items-center justify-center">
      <span
        className={`text-6xl font-bold tabular-nums transition-colors duration-200 ${
          count > 0 ? "text-emerald-400" : count < 0 ? "text-rose-400" : "text-white/80"
        }`}
      >
        {count}
      </span>
    </div>
  );
}

function Controls() {
  const { increment, decrement, reset } = useCounterStore();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={decrement}
        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all active:scale-95 text-lg font-medium"
      >
        -
      </button>
      <button
        onClick={reset}
        className="px-4 h-10 rounded-xl bg-white/5 border border-white/10 text-white/30 hover:bg-white/10 hover:text-white/60 transition-all active:scale-95 text-xs uppercase tracking-wider"
      >
        Reset
      </button>
      <button
        onClick={increment}
        className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 text-violet-300 hover:bg-violet-500/30 transition-all active:scale-95 text-lg font-medium"
      >
        +
      </button>
    </div>
  );
}

function ReactiveLabel() {
  const count = useCounterStore((s) => s.count);
  return (
    <p className="text-white/20 text-[10px] uppercase tracking-widest">
      {count === 0 ? "Tap +/- to start" : `${Math.abs(count)} step${Math.abs(count) !== 1 ? "s" : ""} ${count > 0 ? "up" : "down"}`}
    </p>
  );
}

export default function ZustandDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-6">
      <p className="text-white/40 text-xs uppercase tracking-widest">
        Zustand reactive counter
      </p>
      <CountDisplay />
      <Controls />
      <ReactiveLabel />
    </div>
  );
}
