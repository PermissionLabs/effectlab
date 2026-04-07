"use client";

import { useScramble } from "use-scramble";
import { useEffect, useState, useCallback } from "react";

const heroWords = ["MOTION", "ANIMATION", "EFFECTS", "CREATIVE", "SCRAMBLE"];
const subPhrases = [
  "decode the future",
  "break the cipher",
  "hack the matrix",
  "glitch reality",
];

export default function UseScrambleDemo() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  const { ref: heroRef, replay: heroReplay } = useScramble({
    text: heroWords[heroIndex],
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 3,
    chance: 0.8,
    overdrive: false,
    overflow: false,
  });

  const { ref: subRef, replay: subReplay } = useScramble({
    text: subPhrases[subIndex],
    speed: 0.4,
    tick: 2,
    step: 1,
    scramble: 8,
    seed: 1,
    chance: 0.6,
  });

  const { ref: staticRef } = useScramble({
    text: "use-scramble",
    speed: 0.3,
    tick: 3,
    step: 1,
    scramble: 12,
    seed: 0,
  });

  const cycleHero = useCallback(() => {
    setHeroIndex((prev) => (prev + 1) % heroWords.length);
  }, []);

  const cycleSub = useCallback(() => {
    setSubIndex((prev) => (prev + 1) % subPhrases.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(cycleHero, 2800);
    return () => clearInterval(interval);
  }, [cycleHero]);

  useEffect(() => {
    const interval = setInterval(cycleSub, 3500);
    return () => clearInterval(interval);
  }, [cycleSub]);

  useEffect(() => {
    heroReplay();
  }, [heroIndex, heroReplay]);

  useEffect(() => {
    subReplay();
  }, [subIndex, subReplay]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        gap: "1rem",
        padding: "1.5rem",
      }}
    >
      <p
        ref={heroRef}
        style={{
          fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          fontWeight: 800,
          color: "#00ffa3",
          letterSpacing: "0.08em",
          lineHeight: 1.1,
          textAlign: "center",
          textShadow: "0 0 20px rgba(0, 255, 163, 0.4)",
        }}
      />
      <p
        ref={subRef}
        style={{
          fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
          fontSize: "clamp(0.85rem, 2.5vw, 1.2rem)",
          fontWeight: 400,
          color: "rgba(255, 255, 255, 0.6)",
          letterSpacing: "0.12em",
          textAlign: "center",
          textTransform: "lowercase",
        }}
      />
      <p
        ref={staticRef}
        style={{
          fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
          fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
          fontWeight: 400,
          color: "rgba(0, 255, 163, 0.25)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginTop: "0.5rem",
        }}
      />
    </div>
  );
}
