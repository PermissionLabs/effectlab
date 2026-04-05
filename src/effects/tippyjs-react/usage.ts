export const usage = {
  install: "bun add @tippyjs/react",
  tsx: `"use client";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/animations/scale.css";
import "tippy.js/animations/perspective.css";

export default function TooltipExample() {
  return (
    <div className="flex gap-4 p-8">
      <Tippy content="Shift away animation" animation="shift-away">
        <button className="px-4 py-2 bg-violet-600 text-white rounded-lg">
          Shift Away
        </button>
      </Tippy>

      <Tippy content="Scale animation" animation="scale">
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg">
          Scale
        </button>
      </Tippy>

      <Tippy content="Perspective animation" animation="perspective">
        <button className="px-4 py-2 bg-amber-600 text-white rounded-lg">
          Perspective
        </button>
      </Tippy>
    </div>
  );
}`,
};
