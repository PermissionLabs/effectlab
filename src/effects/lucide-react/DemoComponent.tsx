"use client";

import {
  Sparkles,
  Zap,
  Heart,
  Star,
  Rocket,
  Globe,
  Code,
  Palette,
  type LucideIcon,
} from "lucide-react";

const icons: { Icon: LucideIcon; label: string; color: string }[] = [
  { Icon: Sparkles, label: "Sparkles", color: "#f59e0b" },
  { Icon: Zap, label: "Zap", color: "#eab308" },
  { Icon: Heart, label: "Heart", color: "#ef4444" },
  { Icon: Star, label: "Star", color: "#8b5cf6" },
  { Icon: Rocket, label: "Rocket", color: "#3b82f6" },
  { Icon: Globe, label: "Globe", color: "#06b6d4" },
  { Icon: Code, label: "Code", color: "#10b981" },
  { Icon: Palette, label: "Palette", color: "#ec4899" },
];

export default function LucideReactDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <p className="text-white/50 text-xs uppercase tracking-widest">
        Hover icons to animate
      </p>
      <div className="grid grid-cols-4 gap-4">
        {icons.map(({ Icon, label, color }) => (
          <div
            key={label}
            className="group flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 hover:bg-white/5 cursor-pointer"
          >
            <Icon
              size={32}
              className="transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as SVGSVGElement).style.color = color;
                (e.currentTarget as SVGSVGElement).style.filter = `drop-shadow(0 0 8px ${color}80)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as SVGSVGElement).style.color = "rgba(255,255,255,0.4)";
                (e.currentTarget as SVGSVGElement).style.filter = "none";
              }}
            />
            <span className="text-[10px] text-white/30 group-hover:text-white/60 transition-colors duration-300">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
