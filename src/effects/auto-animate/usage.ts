export const usage = {
  install: "bun add @formkit/auto-animate",
  tsx: `"use client";

import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function AutoAnimateDemo() {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
  const [parent] = useAutoAnimate();

  const addItem = () => {
    const fruits = ["Mango", "Grape", "Peach", "Kiwi", "Lemon", "Melon"];
    const pick = fruits[Math.floor(Math.random() * fruits.length)];
    setItems((prev) => [...prev, pick]);
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const shuffle = () => {
    setItems((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="space-y-4">
      <ul ref={parent} className="space-y-2">
        {items.map((item, i) => (
          <li
            key={item + i}
            className="flex items-center justify-between px-4 py-2 rounded-lg bg-white/10"
          >
            {item}
            <button onClick={() => removeItem(i)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <button onClick={addItem}>Add</button>
        <button onClick={shuffle}>Shuffle</button>
      </div>
    </div>
  );
}`,
};
