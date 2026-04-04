export const usage = {
  install: "npm install react-type-animation",
  tsx: `"use client";

import { TypeAnimation } from "react-type-animation";

export default function Typewriter() {
  return (
    <TypeAnimation
      sequence={[
        "Hello World",
        2000,
        "Welcome to my site",
        2000,
        "Let's build something great",
        2000,
      ]}
      wrapper="h1"
      speed={50}
      repeat={Infinity}
      cursor={true}
      style={{
        fontSize: "2rem",
        fontWeight: 700,
        color: "#ffffff",
        fontFamily: "monospace",
      }}
    />
  );
}`,
};
