export const usage = {
  install: "bun add react-just-parallax",
  tsx: `"use client";

import { useRef } from "react";
import { MouseParallax } from "react-just-parallax";

export default function ParallaxScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      {/* Slow background layer */}
      <MouseParallax strength={0.02} parallaxContainerRef={containerRef}>
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "1px solid rgba(139, 92, 246, 0.2)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </MouseParallax>

      {/* Medium speed layer */}
      <MouseParallax strength={0.05} parallaxContainerRef={containerRef}>
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "rgba(236, 72, 153, 0.6)",
            position: "absolute",
            top: "30%",
            left: "25%",
          }}
        />
      </MouseParallax>

      {/* Fast foreground layer */}
      <MouseParallax strength={0.1} parallaxContainerRef={containerRef}>
        <div
          style={{
            width: "8px",
            height: "8px",
            background: "rgba(99, 102, 241, 0.7)",
            position: "absolute",
            top: "60%",
            right: "30%",
            transform: "rotate(45deg)",
          }}
        />
      </MouseParallax>
    </div>
  );
}`,
};
