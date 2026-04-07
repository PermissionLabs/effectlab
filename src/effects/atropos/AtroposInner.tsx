"use client";

import Atropos from "atropos/react";
import "atropos/css";

export default function AtroposInner() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <Atropos
        className="w-full max-w-[280px]"
        activeOffset={40}
        shadowScale={1.05}
        rotateXMax={15}
        rotateYMax={15}
        shadow={false}
        highlight={false}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "16px",
            overflow: "hidden",
            background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(6,182,212,0.15))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Background layer */}
          <div
            data-atropos-offset="-5"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
          </div>

          {/* Mid layer — geometric shapes */}
          <div
            data-atropos-offset="5"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "2px solid rgba(6,182,212,0.5)",
                boxShadow: "0 0 16px rgba(6,182,212,0.3)",
              }}
            />
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "8px",
                border: "2px solid rgba(139,92,246,0.5)",
                transform: "rotate(45deg)",
                boxShadow: "0 0 16px rgba(139,92,246,0.3)",
              }}
            />
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "2px solid rgba(236,72,153,0.5)",
                boxShadow: "0 0 16px rgba(236,72,153,0.3)",
              }}
            />
          </div>

          {/* Front layer — text */}
          <div
            data-atropos-offset="10"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <p
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "white",
                letterSpacing: "0.05em",
                textShadow: "0 0 20px rgba(139,92,246,0.5)",
              }}
            >
              ATROPOS
            </p>
            <p
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              3D Parallax Hover
            </p>
          </div>
        </div>
      </Atropos>
    </div>
  );
}
