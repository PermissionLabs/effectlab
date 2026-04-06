"use client";

import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const WORDS = [
  "Brilliant",
  "Stunning",
  "Powerful",
  "Seamless",
  "Elegant",
  "Dynamic",
  "Beautiful",
  "Magnetic",
];

export default function ReactTextTransitionDemo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-white">
        Make it{" "}
        <TextTransition
          inline
          springConfig={presets.wobbly}
          className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent"
        >
          {WORDS[index]}
        </TextTransition>
      </h2>
    </div>
  );
}
