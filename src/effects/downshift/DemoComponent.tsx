"use client";

import { useState } from "react";
import { useCombobox } from "downshift";

const languages = [
  "TypeScript", "JavaScript", "Python", "Rust", "Go",
  "Swift", "Kotlin", "Ruby", "C++", "C#",
  "Java", "Haskell", "Elixir", "Dart", "Zig",
  "Scala", "Clojure", "OCaml", "Lua", "PHP",
];

export default function DownshiftDemo() {
  const [inputItems, setInputItems] = useState(languages);

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        languages.filter((item) =>
          item.toLowerCase().includes((inputValue ?? "").toLowerCase())
        )
      );
    },
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <p className="text-white/40 text-xs uppercase tracking-widest">
        Search a language
      </p>

      <div className="relative w-full max-w-xs">
        <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:border-violet-500/50 focus-within:ring-1 focus-within:ring-violet-500/25 transition-all">
          <input
            {...getInputProps()}
            placeholder="Type to search..."
            className="flex-1 bg-transparent px-4 py-2.5 text-white text-sm outline-none placeholder:text-white/30"
          />
          <button
            {...getToggleButtonProps()}
            className="px-3 text-white/30 hover:text-white/60 transition-colors"
            aria-label="toggle menu"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={isOpen ? "M2 8L6 4L10 8" : "M2 4L6 8L10 4"} />
            </svg>
          </button>
        </div>

        <ul
          {...getMenuProps()}
          className={`absolute z-10 w-full mt-1 rounded-xl border border-white/10 bg-[#0a0a1a] overflow-hidden shadow-xl shadow-black/50 max-h-48 overflow-y-auto transition-all ${
            isOpen && inputItems.length > 0 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {isOpen &&
            inputItems.map((item, index) => (
              <li
                key={item}
                {...getItemProps({ item, index })}
                className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                  highlightedIndex === index
                    ? "bg-violet-500/15 text-violet-300"
                    : "text-white/70 hover:bg-white/5"
                } ${selectedItem === item ? "font-medium text-violet-400" : ""}`}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>

      {selectedItem && (
        <div className="flex items-center gap-2 mt-1">
          <span className="text-white/30 text-[10px] uppercase tracking-wider">Selected:</span>
          <span className="text-violet-400 text-sm font-mono">{selectedItem}</span>
        </div>
      )}
    </div>
  );
}
