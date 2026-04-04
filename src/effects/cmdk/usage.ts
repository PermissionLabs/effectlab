export const usage = {
  install: "bun add cmdk",
  tsx: `"use client";

import { Command } from "cmdk";
import { useState } from "react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Open Command Palette (Cmd+K)
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Command Menu"
        className="fixed inset-0 z-50"
      >
        <Command.Input
          placeholder="Type a command or search..."
          className="w-full px-4 py-3 bg-gray-900 text-white outline-none border-b border-gray-700"
        />
        <Command.List className="max-h-80 overflow-y-auto p-2 bg-gray-900">
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Actions">
            <Command.Item onSelect={() => console.log("New file")}>
              Create New File
            </Command.Item>
            <Command.Item onSelect={() => console.log("Settings")}>
              Open Settings
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Navigation">
            <Command.Item onSelect={() => console.log("Home")}>
              Go to Home
            </Command.Item>
            <Command.Item onSelect={() => console.log("Dashboard")}>
              Go to Dashboard
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
}`,
};
