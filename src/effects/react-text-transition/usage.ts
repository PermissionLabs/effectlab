export const usage = {
  install: "bun add react-text-transition",
  tsx: `"use client";
import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const WORDS = ["Brilliant", "Stunning", "Powerful", "Elegant"];

export default function Example() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % WORDS.length),
      2000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
      Make it{" "}
      <TextTransition inline springConfig={presets.wobbly}>
        {WORDS[index]}
      </TextTransition>
    </h1>
  );
}`,
};
