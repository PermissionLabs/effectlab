"use client";

import { useState, useCallback } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";

const COLORS = [
  "#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3",
  "#54a0ff", "#5f27cd", "#01a3a4", "#f368e0",
  "#ff6348", "#7bed9f", "#70a1ff", "#eccc68",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const initialItems = COLORS.map((color, i) => ({ id: `card-${i}`, color }));

export default function ReactFlipToolkitDemo() {
  const [items, setItems] = useState(initialItems);

  const handleShuffle = useCallback(() => {
    setItems((prev) => shuffle(prev));
  }, []);

  const flipKey = items.map((i) => i.id).join(",");

  return (
    <div className="w-full h-full flex flex-col p-4 gap-3">
      <Flipper flipKey={flipKey} spring="wobbly">
        <div className="grid grid-cols-4 gap-2 flex-1">
          {items.map((item) => (
            <Flipped key={item.id} flipId={item.id}>
              <div
                className="rounded-lg w-full aspect-square"
                style={{ backgroundColor: item.color, opacity: 0.9 }}
              />
            </Flipped>
          ))}
        </div>
      </Flipper>
      <button
        onClick={handleShuffle}
        className="w-full py-2 rounded-lg text-sm font-medium text-white/90 bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
      >
        Shuffle
      </button>
    </div>
  );
}
