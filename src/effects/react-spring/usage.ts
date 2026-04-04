export const usage = {
  install: "bun add @react-spring/web",
  tsx: `"use client";

import { useState, useCallback } from "react";
import { useTrail, animated } from "@react-spring/web";

const items = ["Design", "Develop", "Deploy", "Deliver"];

export default function SpringTrail() {
  const [show, setShow] = useState(true);

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translateX(-40px)" },
    to: {
      opacity: show ? 1 : 0,
      transform: show ? "translateX(0px)" : "translateX(-40px)",
    },
    config: { mass: 1, tension: 200, friction: 20 },
  });

  const handleReset = useCallback(() => {
    setShow(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setShow(true));
    });
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {trail.map((style, i) => (
        <animated.div key={items[i]} style={style} className="rounded-xl border p-4">
          <p className="text-lg font-semibold">{items[i]}</p>
        </animated.div>
      ))}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}`,
};
