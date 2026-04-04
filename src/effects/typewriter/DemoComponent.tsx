"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypewriterDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: 120,
        padding: "2rem",
        backgroundColor: "#0a0a0a",
        borderRadius: 12,
      }}
    >
      <TypeAnimation
        sequence={[
          "Build beautiful UIs",
          2000,
          "Ship faster",
          2000,
          "Animate everything",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        cursor={true}
        style={{
          fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
          fontSize: "2rem",
          fontWeight: 700,
          color: "#ffffff",
          display: "inline-block",
        }}
      />
    </div>
  );
}
