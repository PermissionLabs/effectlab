"use client";

import { useState } from "react";
import { Squash, Turn, Rotate, Cross } from "hamburger-react";

export default function HamburgerReactDemo() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div className="flex items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-xl bg-white/5 border border-white/10 p-2">
            <Squash toggled={isOpen1} toggle={setIsOpen1} size={24} color="#8b5cf6" />
          </div>
          <span className="text-white/40 text-xs">Squash</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="rounded-xl bg-white/5 border border-white/10 p-2">
            <Turn toggled={isOpen2} toggle={setIsOpen2} size={24} color="#3b82f6" />
          </div>
          <span className="text-white/40 text-xs">Turn</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="rounded-xl bg-white/5 border border-white/10 p-2">
            <Rotate toggled={isOpen3} toggle={setIsOpen3} size={24} color="#f59e0b" />
          </div>
          <span className="text-white/40 text-xs">Rotate</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="rounded-xl bg-white/5 border border-white/10 p-2">
            <Cross toggled={isOpen4} toggle={setIsOpen4} size={24} color="#10b981" />
          </div>
          <span className="text-white/40 text-xs">Cross</span>
        </div>
      </div>
    </div>
  );
}
