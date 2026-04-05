"use client";

import useRipple from "use-ripple-hook";

function RippleButton({
  label,
  color,
  bgClass,
  borderClass,
  textClass,
  size,
}: {
  label: string;
  color: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  size: string;
}) {
  const [rippleRef, rippleEvent] = useRipple({ color });

  return (
    <button
      ref={rippleRef}
      onPointerDown={rippleEvent}
      className={`${size} ${bgClass} ${borderClass} ${textClass} rounded-xl font-medium transition-all active:scale-95 relative overflow-hidden`}
    >
      {label}
    </button>
  );
}

export default function UseRippleInner() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-5">
      <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
        Click buttons to see ripple
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <RippleButton
          label="Primary"
          color="rgba(99, 102, 241, 0.4)"
          bgClass="bg-indigo-500/15 hover:bg-indigo-500/25"
          borderClass="border border-indigo-500/20"
          textClass="text-indigo-400 text-sm"
          size="px-6 py-3"
        />
        <RippleButton
          label="Large Action"
          color="rgba(16, 185, 129, 0.4)"
          bgClass="bg-emerald-500/15 hover:bg-emerald-500/25"
          borderClass="border border-emerald-500/20"
          textClass="text-emerald-400 text-base"
          size="px-8 py-4"
        />
        <RippleButton
          label="Sm"
          color="rgba(244, 63, 94, 0.4)"
          bgClass="bg-rose-500/15 hover:bg-rose-500/25"
          borderClass="border border-rose-500/20"
          textClass="text-rose-400 text-xs"
          size="px-4 py-2"
        />
      </div>
    </div>
  );
}
