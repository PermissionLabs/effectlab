"use client";

import { useRef } from "react";
import { MouseParallax } from "react-just-parallax";

export default function ParallaxInner() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background glow */}
      <MouseParallax strength={0.01} parallaxContainerRef={containerRef}>
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
            filter: "blur(30px)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </MouseParallax>

      {/* Slow layer - large ring */}
      <MouseParallax strength={0.02} parallaxContainerRef={containerRef}>
        <div
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            border: "1px solid rgba(139, 92, 246, 0.15)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </MouseParallax>

      {/* Medium layer - smaller ring */}
      <MouseParallax strength={0.04} parallaxContainerRef={containerRef}>
        <div
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            border: "1px solid rgba(167, 139, 250, 0.2)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </MouseParallax>

      {/* Floating shapes - top left */}
      <MouseParallax strength={0.06} parallaxContainerRef={containerRef}>
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "rgba(236, 72, 153, 0.5)",
            boxShadow: "0 0 12px rgba(236, 72, 153, 0.3)",
            position: "absolute",
            top: "25%",
            left: "20%",
          }}
        />
      </MouseParallax>

      {/* Floating shapes - top right */}
      <MouseParallax strength={0.08} parallaxContainerRef={containerRef}>
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "2px",
            background: "rgba(99, 102, 241, 0.6)",
            boxShadow: "0 0 10px rgba(99, 102, 241, 0.3)",
            position: "absolute",
            top: "20%",
            right: "25%",
            transform: "rotate(45deg)",
          }}
        />
      </MouseParallax>

      {/* Floating shapes - bottom left */}
      <MouseParallax strength={0.07} parallaxContainerRef={containerRef}>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "rgba(34, 211, 238, 0.5)",
            boxShadow: "0 0 10px rgba(34, 211, 238, 0.3)",
            position: "absolute",
            bottom: "28%",
            left: "28%",
          }}
        />
      </MouseParallax>

      {/* Floating shapes - bottom right */}
      <MouseParallax strength={0.09} parallaxContainerRef={containerRef}>
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "rgba(250, 204, 21, 0.5)",
            boxShadow: "0 0 8px rgba(250, 204, 21, 0.3)",
            position: "absolute",
            bottom: "22%",
            right: "20%",
          }}
        />
      </MouseParallax>

      {/* Fast layer - small diamond */}
      <MouseParallax strength={0.1} parallaxContainerRef={containerRef}>
        <div
          style={{
            width: "6px",
            height: "6px",
            background: "rgba(167, 139, 250, 0.7)",
            boxShadow: "0 0 8px rgba(167, 139, 250, 0.4)",
            position: "absolute",
            top: "35%",
            right: "35%",
            transform: "rotate(45deg)",
          }}
        />
      </MouseParallax>

      {/* Center text */}
      <MouseParallax strength={0.03} parallaxContainerRef={containerRef}>
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          <p
            style={{
              fontSize: "clamp(0.9rem, 2.5vw, 1.3rem)",
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.85)",
              letterSpacing: "0.1em",
              whiteSpace: "nowrap",
            }}
          >
            Move your mouse
          </p>
          <p
            style={{
              fontSize: "clamp(0.55rem, 1.2vw, 0.7rem)",
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.35)",
              letterSpacing: "0.15em",
              marginTop: "0.3rem",
              textTransform: "uppercase",
            }}
          >
            Parallax depth effect
          </p>
        </div>
      </MouseParallax>
    </div>
  );
}
