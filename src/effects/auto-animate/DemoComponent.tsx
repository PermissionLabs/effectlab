"use client";

import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const COLORS = [
  "bg-amber-500/20 border-amber-500/30",
  "bg-blue-500/20 border-blue-500/30",
  "bg-emerald-500/20 border-emerald-500/30",
  "bg-rose-500/20 border-rose-500/30",
  "bg-violet-500/20 border-violet-500/30",
  "bg-cyan-500/20 border-cyan-500/30",
];

const INITIAL_ITEMS = [
  { id: 1, label: "Apple", color: COLORS[0] },
  { id: 2, label: "Banana", color: COLORS[1] },
  { id: 3, label: "Cherry", color: COLORS[2] },
  { id: 4, label: "Dragonfruit", color: COLORS[3] },
];

let nextId = 5;

export default function AutoAnimateDemo() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [parent] = useAutoAnimate();

  const addItem = () => {
    const fruits = ["Mango", "Grape", "Peach", "Kiwi", "Lemon", "Melon"];
    const pick = fruits[Math.floor(Math.random() * fruits.length)];
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    setItems((prev) => [...prev, { id: nextId++, label: pick, color }]);
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const shuffle = () => {
    setItems((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <div className="w-full max-w-sm space-y-3">
        <ul ref={parent} className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className={`flex items-center justify-between px-4 py-2.5 rounded-lg border ${item.color} text-white text-sm`}
            >
              <span>{item.label}</span>
              <button
                onClick={() => removeItem(item.id)}
                className="text-white/40 hover:text-white/80 transition-colors text-xs"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 pt-2">
          <button
            onClick={addItem}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
          >
            Add Item
          </button>
          <button
            onClick={shuffle}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
          >
            Shuffle
          </button>
        </div>
      </div>
    </div>
  );
}
