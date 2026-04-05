export const usage = {
  install: "bun add jotai",
  tsx: `"use client";

import { atom, useAtom, Provider } from "jotai";

const countAtom = atom(0);
const nameAtom = atom("World");

// Derived atom (read-only)
const greetingAtom = atom((get) => \`Hello, \${get(nameAtom)}! Count: \${get(countAtom)}\`);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div className="flex items-center gap-3">
      <button onClick={() => setCount((c) => c - 1)} className="px-2 py-1 bg-white/10 rounded text-white">-</button>
      <span className="text-white text-xl font-bold">{count}</span>
      <button onClick={() => setCount((c) => c + 1)} className="px-2 py-1 bg-violet-600 rounded text-white">+</button>
    </div>
  );
}

function NameInput() {
  const [name, setName] = useAtom(nameAtom);
  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="bg-white/5 border border-white/10 rounded px-3 py-1 text-white"
    />
  );
}

function Greeting() {
  const [greeting] = useAtom(greetingAtom);
  return <p className="text-white/60 text-sm">{greeting}</p>;
}

export default function JotaiExample() {
  return (
    <Provider>
      <div className="flex flex-col gap-4 items-center">
        <Counter />
        <NameInput />
        <Greeting />
      </div>
    </Provider>
  );
}`,
};
