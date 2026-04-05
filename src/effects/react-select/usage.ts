export const usage = {
  install: "bun add react-select",
  tsx: `"use client";

import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue.js" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
];

export default function SelectExample() {
  const [selected, setSelected] = useState<typeof options>([]);

  return (
    <Select
      isMulti
      options={options}
      value={selected}
      onChange={(val) => setSelected([...val])}
      placeholder="Choose frameworks..."
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: "rgba(255,255,255,0.05)",
          borderColor: "rgba(255,255,255,0.1)",
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: "#0a0a1a",
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused ? "rgba(139,92,246,0.15)" : "transparent",
          color: "#fff",
        }),
        multiValue: (base) => ({
          ...base,
          backgroundColor: "rgba(139,92,246,0.2)",
        }),
        multiValueLabel: (base) => ({ ...base, color: "#c4b5fd" }),
        input: (base) => ({ ...base, color: "#fff" }),
        placeholder: (base) => ({ ...base, color: "rgba(255,255,255,0.3)" }),
      }}
    />
  );
}`,
};
