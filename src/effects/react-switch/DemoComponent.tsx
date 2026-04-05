"use client";

import { useState } from "react";
import Switch from "react-switch";

export default function ReactSwitchDemo() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(true);

  return (
    <div className="flex items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-8">
      <div className="flex flex-col gap-8">
        {/* Small switch */}
        <div className="flex items-center gap-4">
          <Switch
            checked={checked1}
            onChange={setChecked1}
            onColor="#8b5cf6"
            offColor="#374151"
            onHandleColor="#c4b5fd"
            offHandleColor="#9ca3af"
            handleDiameter={18}
            height={24}
            width={48}
            uncheckedIcon={false}
            checkedIcon={false}
          />
          <span className="text-white/70 text-sm font-mono min-w-[32px]">
            {checked1 ? "ON" : "OFF"}
          </span>
          <span className="text-white/40 text-xs">Small</span>
        </div>

        {/* Medium switch */}
        <div className="flex items-center gap-4">
          <Switch
            checked={checked2}
            onChange={setChecked2}
            onColor="#3b82f6"
            offColor="#374151"
            onHandleColor="#93c5fd"
            offHandleColor="#9ca3af"
            handleDiameter={24}
            height={30}
            width={58}
            uncheckedIcon={false}
            checkedIcon={false}
          />
          <span className="text-white/70 text-sm font-mono min-w-[32px]">
            {checked2 ? "ON" : "OFF"}
          </span>
          <span className="text-white/40 text-xs">Medium</span>
        </div>

        {/* Large switch */}
        <div className="flex items-center gap-4">
          <Switch
            checked={checked3}
            onChange={setChecked3}
            onColor="#10b981"
            offColor="#374151"
            onHandleColor="#6ee7b7"
            offHandleColor="#9ca3af"
            handleDiameter={30}
            height={36}
            width={70}
            uncheckedIcon={false}
            checkedIcon={false}
          />
          <span className="text-white/70 text-sm font-mono min-w-[32px]">
            {checked3 ? "ON" : "OFF"}
          </span>
          <span className="text-white/40 text-xs">Large</span>
        </div>
      </div>
    </div>
  );
}
