export const usage = {
  install: "bun add lucide-react",
  tsx: `"use client";

import { Sparkles, Zap, Heart, Star, Rocket, Globe, Code, Palette } from "lucide-react";

const icons = [
  { Icon: Sparkles, label: "Sparkles", color: "#f59e0b" },
  { Icon: Zap, label: "Zap", color: "#eab308" },
  { Icon: Heart, label: "Heart", color: "#ef4444" },
  { Icon: Star, label: "Star", color: "#8b5cf6" },
  { Icon: Rocket, label: "Rocket", color: "#3b82f6" },
  { Icon: Globe, label: "Globe", color: "#06b6d4" },
  { Icon: Code, label: "Code", color: "#10b981" },
  { Icon: Palette, label: "Palette", color: "#ec4899" },
];

export default function IconGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, padding: 24 }}>
      {icons.map(({ Icon, label, color }) => (
        <div
          key={label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            padding: 12,
            cursor: "pointer",
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Icon size={32} color={color} />
          <span style={{ fontSize: 12, opacity: 0.6 }}>{label}</span>
        </div>
      ))}
    </div>
  );
}`,
};
