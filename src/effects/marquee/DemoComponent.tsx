"use client";

import Marquee from "react-fast-marquee";

const items = [
  { label: "React", bg: "linear-gradient(135deg, #61dafb, #2196f3)" },
  { label: "Next.js", bg: "linear-gradient(135deg, #ffffff, #888888)" },
  { label: "Tailwind", bg: "linear-gradient(135deg, #38bdf8, #0ea5e9)" },
  { label: "TypeScript", bg: "linear-gradient(135deg, #3178c6, #235a97)" },
  { label: "Framer Motion", bg: "linear-gradient(135deg, #e846ff, #8b5cf6)" },
  { label: "Three.js", bg: "linear-gradient(135deg, #049ef4, #000000)" },
  { label: "Vercel", bg: "linear-gradient(135deg, #ffffff, #666666)" },
  { label: "Prisma", bg: "linear-gradient(135deg, #5a67d8, #2d3748)" },
  { label: "Supabase", bg: "linear-gradient(135deg, #3ecf8e, #1a8f5c)" },
  { label: "Zustand", bg: "linear-gradient(135deg, #f59e0b, #d97706)" },
];

export default function MarqueeDemo() {
  return (
    <div
      style={{
        width: "100%",
        padding: "1.5rem 0",
        backgroundColor: "#000000",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <Marquee
        pauseOnHover={true}
        gradient={true}
        gradientColor="black"
        speed={40}
      >
        {items.map((item) => (
          <span
            key={item.label}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5rem 1.25rem",
              margin: "0 0.5rem",
              borderRadius: 9999,
              background: item.bg,
              color: "#ffffff",
              fontSize: "0.875rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            {item.label}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
