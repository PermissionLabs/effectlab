"use client";

import { atom, useAtom, Provider } from "jotai";

const countAtom = atom(0);
const nameAtom = atom("Jotai");
const darkModeAtom = atom(true);

// Derived atom
const summaryAtom = atom((get) => {
  const count = get(countAtom);
  const name = get(nameAtom);
  const dark = get(darkModeAtom);
  return `${name} | count: ${count} | ${dark ? "dark" : "light"}`;
});

function CounterAtom() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3">
      <span className="text-white/40 text-xs uppercase tracking-wider w-14">Count</span>
      <button
        onClick={() => setCount((c) => c - 1)}
        className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-white text-sm transition-all active:scale-95"
      >
        -
      </button>
      <span className="text-violet-400 font-bold text-lg tabular-nums w-8 text-center">
        {count}
      </span>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="w-7 h-7 rounded-lg bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm transition-all active:scale-95"
      >
        +
      </button>
    </div>
  );
}

function NameAtom() {
  const [name, setName] = useAtom(nameAtom);
  return (
    <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3">
      <span className="text-white/40 text-xs uppercase tracking-wider w-14">Name</span>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-emerald-400 text-sm outline-none focus:border-emerald-500/40 transition-colors"
      />
    </div>
  );
}

function ToggleAtom() {
  const [dark, setDark] = useAtom(darkModeAtom);
  return (
    <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3">
      <span className="text-white/40 text-xs uppercase tracking-wider w-14">Mode</span>
      <button
        onClick={() => setDark((d) => !d)}
        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all active:scale-95 ${
          dark
            ? "bg-amber-500/15 border-amber-500/25 text-amber-400"
            : "bg-cyan-500/15 border-cyan-500/25 text-cyan-400"
        }`}
      >
        {dark ? "Dark" : "Light"}
      </button>
    </div>
  );
}

function DerivedDisplay() {
  const [summary] = useAtom(summaryAtom);
  return (
    <div className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5">
      <p className="text-white/20 text-[10px] uppercase tracking-wider mb-1">Derived atom</p>
      <p className="text-white/50 text-xs font-mono">{summary}</p>
    </div>
  );
}

function JotaiContent() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <p className="text-white/40 text-xs uppercase tracking-widest">
        Independent atoms
      </p>
      <div className="w-full max-w-xs flex flex-col gap-2.5">
        <CounterAtom />
        <NameAtom />
        <ToggleAtom />
        <DerivedDisplay />
      </div>
    </div>
  );
}

export default function JotaiDemo() {
  return (
    <Provider>
      <JotaiContent />
    </Provider>
  );
}
