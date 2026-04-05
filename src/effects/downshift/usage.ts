export const usage = {
  install: "bun add downshift",
  tsx: `"use client";

import { useState } from "react";
import { useCombobox } from "downshift";

const items = ["TypeScript", "JavaScript", "Python", "Rust", "Go", "Swift"];

export default function AutocompleteExample() {
  const [inputItems, setInputItems] = useState(items);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter((item) =>
          item.toLowerCase().includes((inputValue ?? "").toLowerCase())
        )
      );
    },
  });

  return (
    <div className="relative w-64">
      <input
        {...getInputProps()}
        placeholder="Search languages..."
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
      />
      <ul
        {...getMenuProps()}
        className="absolute w-full mt-1 bg-gray-900 border border-white/10 rounded-lg overflow-hidden"
      >
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              key={item}
              {...getItemProps({ item, index })}
              className={\`px-4 py-2 text-sm cursor-pointer \${
                highlightedIndex === index ? "bg-violet-500/20 text-violet-300" : "text-white/70"
              }\`}
            >
              {item}
            </li>
          ))}
      </ul>
      {selectedItem && <p className="text-white/60 mt-2 text-sm">Selected: {selectedItem}</p>}
    </div>
  );
}`,
};
