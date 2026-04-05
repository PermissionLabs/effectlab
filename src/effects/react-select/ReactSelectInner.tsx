"use client";

import { useState } from "react";
import Select, { type StylesConfig } from "react-select";

interface Option {
  value: string;
  label: string;
  color: string;
}

const options: Option[] = [
  { value: "react", label: "React", color: "#61dafb" },
  { value: "vue", label: "Vue.js", color: "#42b883" },
  { value: "angular", label: "Angular", color: "#dd1b16" },
  { value: "svelte", label: "Svelte", color: "#ff3e00" },
  { value: "next", label: "Next.js", color: "#ffffff" },
  { value: "nuxt", label: "Nuxt", color: "#00dc82" },
  { value: "solid", label: "SolidJS", color: "#4f88c6" },
  { value: "astro", label: "Astro", color: "#bc52ee" },
];

const darkStyles: StylesConfig<Option, true> = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderColor: state.isFocused ? "rgba(139,92,246,0.5)" : "rgba(255,255,255,0.1)",
    borderRadius: "0.75rem",
    padding: "2px 4px",
    boxShadow: state.isFocused ? "0 0 0 1px rgba(139,92,246,0.25)" : "none",
    "&:hover": { borderColor: "rgba(139,92,246,0.3)" },
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#0a0a1a",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "0.75rem",
    overflow: "hidden",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "rgba(139,92,246,0.15)" : "transparent",
    color: "#fff",
    cursor: "pointer",
    "&:active": { backgroundColor: "rgba(139,92,246,0.25)" },
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "rgba(139,92,246,0.2)",
    borderRadius: "0.5rem",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#c4b5fd",
    fontSize: "0.8rem",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "#c4b5fd",
    "&:hover": { backgroundColor: "rgba(139,92,246,0.3)", color: "#fff" },
    borderRadius: "0 0.5rem 0.5rem 0",
  }),
  input: (base) => ({ ...base, color: "#fff" }),
  placeholder: (base) => ({ ...base, color: "rgba(255,255,255,0.3)" }),
  singleValue: (base) => ({ ...base, color: "#fff" }),
  indicatorSeparator: (base) => ({ ...base, backgroundColor: "rgba(255,255,255,0.1)" }),
  dropdownIndicator: (base) => ({ ...base, color: "rgba(255,255,255,0.3)" }),
  clearIndicator: (base) => ({ ...base, color: "rgba(255,255,255,0.3)" }),
};

export default function ReactSelectInner() {
  const [selected, setSelected] = useState<readonly Option[]>([options[0], options[4]]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-5">
      <p className="text-white/40 text-xs uppercase tracking-widest">
        Multi-select frameworks
      </p>

      <div className="w-full max-w-sm">
        <Select<Option, true>
          isMulti
          options={options}
          value={selected}
          onChange={(val) => setSelected(val)}
          styles={darkStyles}
          placeholder="Choose frameworks..."
          closeMenuOnSelect={false}
        />
      </div>

      <div className="flex flex-wrap gap-2 justify-center mt-1">
        {selected.map((item) => (
          <span
            key={item.value}
            className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/70"
            style={{ backgroundColor: `${item.color}15`, borderColor: `${item.color}30` }}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
