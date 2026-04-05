"use client";

import { useState } from "react";

export default function ReactModalInner() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2.5 rounded-xl bg-violet-500/15 hover:bg-violet-500/25 text-violet-400 text-sm font-medium transition-all border border-violet-500/20"
      >
        Open Modal
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[#1a1a2e] border border-white/10 rounded-2xl p-6 w-80 shadow-2xl animate-[fadeIn_0.2s_ease]">
            <h2 className="text-white font-semibold text-lg mb-2">Modal Title</h2>
            <p className="text-white/60 text-sm mb-4">This is powered by react-modal. A simple, accessible modal dialog.</p>
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg bg-violet-500/20 text-violet-400 text-sm font-medium hover:bg-violet-500/30 transition-all"
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
}
