export const usage = {
  install: "npm install use-scramble",
  tsx: `"use client";

import { useScramble } from "use-scramble";
import { useEffect, useState } from "react";

const phrases = ["HELLO WORLD", "WELCOME", "LET'S BUILD"];

export default function ScrambleText() {
  const [index, setIndex] = useState(0);

  const { ref, replay } = useScramble({
    text: phrases[index],
    speed: 0.6,
    tick: 1,
    step: 1,
    scramble: 4,
    seed: 2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    replay();
  }, [index, replay]);

  return (
    <p
      ref={ref}
      style={{
        fontSize: "2.5rem",
        fontWeight: 700,
        color: "#ffffff",
        fontFamily: "monospace",
      }}
    />
  );
}`,
};
