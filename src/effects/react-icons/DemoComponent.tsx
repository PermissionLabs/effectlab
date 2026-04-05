"use client";

import {
  FiGithub,
  FiHeart,
  FiStar,
} from "react-icons/fi";
import {
  AiFillThunderbolt,
  AiOutlineRocket,
  AiOutlineCode,
} from "react-icons/ai";
import {
  BsFillMoonStarsFill,
  BsFire,
  BsMusicNoteBeamed,
} from "react-icons/bs";
import {
  MdOutlineWavingHand,
  MdColorLens,
  MdAutoAwesome,
} from "react-icons/md";

const icons = [
  { Icon: FiGithub, label: "GitHub", color: "text-white/80", hoverColor: "hover:text-white" },
  { Icon: FiHeart, label: "Heart", color: "text-rose-400/70", hoverColor: "hover:text-rose-400" },
  { Icon: FiStar, label: "Star", color: "text-amber-400/70", hoverColor: "hover:text-amber-400" },
  { Icon: AiFillThunderbolt, label: "Bolt", color: "text-yellow-400/70", hoverColor: "hover:text-yellow-400" },
  { Icon: AiOutlineRocket, label: "Rocket", color: "text-cyan-400/70", hoverColor: "hover:text-cyan-400" },
  { Icon: AiOutlineCode, label: "Code", color: "text-emerald-400/70", hoverColor: "hover:text-emerald-400" },
  { Icon: BsFillMoonStarsFill, label: "Moon", color: "text-indigo-400/70", hoverColor: "hover:text-indigo-400" },
  { Icon: BsFire, label: "Fire", color: "text-orange-400/70", hoverColor: "hover:text-orange-400" },
  { Icon: BsMusicNoteBeamed, label: "Music", color: "text-pink-400/70", hoverColor: "hover:text-pink-400" },
  { Icon: MdOutlineWavingHand, label: "Wave", color: "text-amber-300/70", hoverColor: "hover:text-amber-300" },
  { Icon: MdColorLens, label: "Color", color: "text-violet-400/70", hoverColor: "hover:text-violet-400" },
  { Icon: MdAutoAwesome, label: "Sparkle", color: "text-sky-400/70", hoverColor: "hover:text-sky-400" },
];

export default function ReactIconsDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <p className="text-white/60 text-xs uppercase tracking-widest">
        Icons from Fi, Ai, Bs, Md packs
      </p>
      <div className="grid grid-cols-4 gap-3 w-full max-w-xs">
        {icons.map(({ Icon, label, color, hoverColor }) => (
          <div
            key={label}
            className={`group flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-200 cursor-pointer hover:scale-105`}
          >
            <Icon
              size={22}
              className={`${color} ${hoverColor} transition-colors duration-200`}
            />
            <span className="text-white/30 group-hover:text-white/60 text-[10px] transition-colors duration-200">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
