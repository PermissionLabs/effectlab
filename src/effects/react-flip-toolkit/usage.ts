export const usage = {
  install: "bun add react-flip-toolkit",
  tsx: `"use client";
import { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";

const colors = ["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3"];

function shuffle<T>(a: T[]) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

export default function FlipDemo() {
  const [items, setItems] = useState(colors);
  return (
    <Flipper flipKey={items.join()}>
      <button onClick={() => setItems(shuffle)}>Shuffle</button>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8 }}>
        {items.map((c) => (
          <Flipped key={c} flipId={c}>
            <div style={{ background: c, height: 80, borderRadius: 8 }} />
          </Flipped>
        ))}
      </div>
    </Flipper>
  );
}`,
};
