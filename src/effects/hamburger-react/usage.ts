export const usage = {
  install: "bun add hamburger-react",
  tsx: `"use client";

import { useState } from "react";
import { Squash } from "hamburger-react";

export default function HamburgerExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Squash
        toggled={isOpen}
        toggle={setIsOpen}
        size={28}
        color="#8b5cf6"
      />
      {isOpen && (
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}
    </div>
  );
}`,
};
