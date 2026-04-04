export const usage = {
  install: "npm install react-parallax-tilt",
  tsx: `"use client";

import Tilt from "react-parallax-tilt";

export default function TiltCard() {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.3}
      scale={1.02}
    >
      <div
        style={{
          width: 280,
          height: 180,
          borderRadius: 16,
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "1.25rem",
          fontWeight: 700,
        }}
      >
        Hover me!
      </div>
    </Tilt>
  );
}`,
};
