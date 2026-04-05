export const usage = {
  install: "bun add react-switch",
  tsx: `"use client";

import { useState } from "react";
import Switch from "react-switch";

export default function ToggleExample() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <Switch
        checked={checked}
        onChange={setChecked}
        onColor="#8b5cf6"
        offColor="#374151"
        handleDiameter={22}
        height={28}
        width={54}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <span>{checked ? "ON" : "OFF"}</span>
    </div>
  );
}`,
};
