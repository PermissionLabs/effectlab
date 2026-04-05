export const usage = {
  install: "bun add @twistezo/react-text-scramble",
  tsx: `"use client";

import { TextScramble } from "@twistezo/react-text-scramble";

const phrases = ["Hello World", "Welcome", "React is awesome"];

export default function TextScrambleExample() {
  return (
    <div style={{ padding: "2rem", background: "#050510", minHeight: "100vh" }}>
      <h1 style={{ fontFamily: "monospace", fontSize: "3rem", color: "#34d399" }}>
        <TextScramble
          texts={phrases}
          letterSpeed={50}
          nextLetterSpeed={100}
          pauseTime={2000}
          characters="!@#$%^&*()_+"
        />
      </h1>
    </div>
  );
}`,
};
