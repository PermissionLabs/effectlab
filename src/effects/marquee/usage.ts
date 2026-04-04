export const usage = {
  install: "npm install react-fast-marquee",
  tsx: `"use client";

import Marquee from "react-fast-marquee";

export default function InfiniteMarquee() {
  const items = ["React", "Next.js", "Tailwind", "TypeScript", "Prisma"];

  return (
    <Marquee pauseOnHover={true} gradient={true} gradientColor="black" speed={40}>
      {items.map((item) => (
        <span
          key={item}
          style={{
            padding: "0.5rem 1.25rem",
            margin: "0 0.5rem",
            borderRadius: 9999,
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "#fff",
            fontSize: "0.875rem",
            fontWeight: 600,
          }}
        >
          {item}
        </span>
      ))}
    </Marquee>
  );
}`,
};
