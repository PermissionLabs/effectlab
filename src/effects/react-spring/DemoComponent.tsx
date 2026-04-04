"use client";

import { useState, useCallback } from "react";
import { useTrail, animated } from "@react-spring/web";

const cards = [
  { title: "Design", color: "bg-blue-500/20 border-blue-500/30" },
  { title: "Develop", color: "bg-emerald-500/20 border-emerald-500/30" },
  { title: "Deploy", color: "bg-amber-500/20 border-amber-500/30" },
  { title: "Deliver", color: "bg-purple-500/20 border-purple-500/30" },
];

export default function ReactSpringDemo() {
  const [show, setShow] = useState(true);

  const trail = useTrail(cards.length, {
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
      requestAnimationFrame(() => {
        setShow(true);
      });
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <div className="flex flex-col gap-3 w-full max-w-sm">
        {trail.map((style, index) => (
          <animated.div
            key={cards[index].title}
            style={style}
            className={`rounded-xl border p-4 ${cards[index].color}`}
          >
            <p className="text-lg font-semibold text-white">
              {cards[index].title}
            </p>
            <p className="text-sm text-white/60">
              Step {index + 1} of the workflow
            </p>
          </animated.div>
        ))}
      </div>

      <button
        onClick={handleReset}
        className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
      >
        Reset Animation
      </button>
    </div>
  );
}
