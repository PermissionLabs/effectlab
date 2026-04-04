"use client";

export default function HeroTitle() {
  return (
    <h1
      className="text-3xl font-bold tracking-tight select-none"
      style={{
        background: "linear-gradient(90deg, #a78bfa, #ec4899, #f59e0b, #10b981, #818cf8, #a78bfa)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: "gradient-text-shimmer 5s linear infinite",
      }}
    >
      Visual Effects Showcase
    </h1>
  );
}
