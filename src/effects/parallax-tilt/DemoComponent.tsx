"use client";

import Tilt from "react-parallax-tilt";

export default function ParallaxTiltDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: 260,
        padding: "2rem",
      }}
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.35}
        glareColor="#ffffff"
        glareBorderRadius="16px"
        scale={1.02}
        transitionSpeed={1500}
        style={{ borderRadius: 16 }}
      >
        <div
          style={{
            width: 280,
            minHeight: 180,
            borderRadius: 16,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "#ffffff",
            boxShadow: "0 20px 60px rgba(102, 126, 234, 0.3)",
          }}
        >
          <div style={{ fontSize: "0.75rem", opacity: 0.7, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Interactive
          </div>
          <div>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 4 }}>
              3D Card Tilt
            </div>
            <div style={{ fontSize: "0.875rem", opacity: 0.8 }}>
              Hover and move your cursor to see the parallax tilt and glare effect.
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
