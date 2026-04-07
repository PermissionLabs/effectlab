"use client";

import { Parallax } from "react-parallax";

const sections = [
  {
    strength: 300,
    label: "strength: 300",
    desc: "Background moves slower",
    gradient: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    circles: [
      { cx: "25%", cy: "30%", r: 60, fill: "#667eea", opacity: 0.35 },
      { cx: "70%", cy: "65%", r: 80, fill: "#764ba2", opacity: 0.25 },
    ],
  },
  {
    strength: 500,
    label: "strength: 500",
    desc: "Stronger parallax",
    gradient: "linear-gradient(135deg, #f12711, #f5af19)",
    circles: [
      { cx: "30%", cy: "40%", r: 50, fill: "white", opacity: 0.1 },
      { cx: "65%", cy: "60%", r: 70, fill: "white", opacity: 0.08 },
    ],
  },
  {
    strength: -200,
    label: "strength: -200",
    desc: "Reverse direction",
    gradient: "linear-gradient(135deg, #00c6ff, #0072ff)",
    circles: [
      { cx: "50%", cy: "35%", r: 55, fill: "white", opacity: 0.1 },
      { cx: "75%", cy: "70%", r: 40, fill: "white", opacity: 0.08 },
    ],
  },
];

export default function ReactParallaxDemo() {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div style={{ minHeight: "900px" }} className="flex flex-col">
        {sections.map((s, i) => (
          <Parallax
            key={i}
            strength={s.strength}
            renderLayer={(percentage) => (
              <div
                className="absolute inset-0"
                style={{
                  background: s.gradient,
                  opacity: 0.4 + percentage * 0.6,
                }}
              >
                {s.circles.map((c, j) => (
                  <div
                    key={j}
                    className="absolute rounded-full"
                    style={{
                      left: c.cx,
                      top: c.cy,
                      width: c.r,
                      height: c.r,
                      backgroundColor: c.fill,
                      opacity: c.opacity,
                      transform: `translate(-50%, -50%) scale(${0.8 + percentage * 0.4})`,
                    }}
                  />
                ))}
              </div>
            )}
          >
            <div className="h-64 flex items-center justify-center relative z-10">
              <div className="text-center">
                <p className="text-white/80 text-lg font-bold">{s.label}</p>
                <p className="text-white/40 text-xs mt-1">{s.desc}</p>
              </div>
            </div>
          </Parallax>
        ))}

        <div className="h-40" />
      </div>
    </div>
  );
}
