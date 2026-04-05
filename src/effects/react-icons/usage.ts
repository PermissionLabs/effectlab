export const usage = {
  install: "bun add react-icons",
  tsx: `"use client";

import { FiGithub, FiHeart, FiStar } from "react-icons/fi";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsFire } from "react-icons/bs";
import { MdAutoAwesome } from "react-icons/md";

const icons = [
  { Icon: FiGithub, label: "GitHub" },
  { Icon: FiHeart, label: "Heart" },
  { Icon: FiStar, label: "Star" },
  { Icon: AiFillThunderbolt, label: "Bolt" },
  { Icon: BsFire, label: "Fire" },
  { Icon: MdAutoAwesome, label: "Sparkle" },
];

export default function IconsExample() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, padding: 24 }}>
      {icons.map(({ Icon, label }) => (
        <div key={label} style={{ textAlign: "center" }}>
          <Icon size={24} />
          <p style={{ fontSize: 12, marginTop: 4 }}>{label}</p>
        </div>
      ))}
    </div>
  );
}`,
};
