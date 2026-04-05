"use client";

import { useState } from "react";

export default function NextThemesInner() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const isDark = theme === "dark";

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full rounded-2xl p-8 gap-6 transition-colors duration-500"
      style={{ backgroundColor: isDark ? "#050510" : "#f0f0f5" }}
    >
      <p
        className="text-xs uppercase tracking-widest transition-colors duration-500"
        style={{ color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)" }}
      >
        next-themes toggle demo
      </p>

      {/* Theme toggle button */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative w-16 h-16 rounded-2xl border transition-all duration-500 flex items-center justify-center active:scale-95"
        style={{
          borderColor: isDark ? "rgba(139,92,246,0.3)" : "rgba(234,179,8,0.3)",
          backgroundColor: isDark ? "rgba(139,92,246,0.1)" : "rgba(234,179,8,0.1)",
        }}
      >
        {/* Sun icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 absolute transition-all duration-500"
          style={{
            stroke: isDark ? "rgba(255,255,255,0.2)" : "#eab308",
            opacity: isDark ? 0 : 1,
            transform: isDark ? "rotate(-90deg) scale(0.5)" : "rotate(0deg) scale(1)",
          }}
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>

        {/* Moon icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 absolute transition-all duration-500"
          style={{
            stroke: isDark ? "#a78bfa" : "rgba(0,0,0,0.2)",
            opacity: isDark ? 1 : 0,
            transform: isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
          }}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>

      {/* Theme label */}
      <div className="flex flex-col items-center gap-1">
        <span
          className="text-lg font-medium transition-colors duration-500"
          style={{ color: isDark ? "#e2e8f0" : "#1e293b" }}
        >
          {isDark ? "Dark Mode" : "Light Mode"}
        </span>
        <span
          className="text-xs transition-colors duration-500"
          style={{ color: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}
        >
          Click the icon to toggle theme
        </span>
      </div>

      {/* Mockup cards */}
      <div className="flex gap-3 mt-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-16 h-10 rounded-lg border transition-all duration-500"
            style={{
              borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.08)",
              backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
