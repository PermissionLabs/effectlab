export const usage = {
  install: "bun add react-modal",
  tsx: `"use client";

import { useState, useEffect } from "react";
import Modal from "react-modal";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement(document.body);
  }, []);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.75)" },
          content: {
            maxWidth: 400,
            margin: "auto",
            borderRadius: 16,
            background: "#1a1a2e",
            border: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      >
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}`,
};
