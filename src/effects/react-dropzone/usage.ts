export const usage = {
  install: "bun add react-dropzone",
  tsx: `"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function DropzoneExample() {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpg", ".jpeg", ".webp"] },
  });

  return (
    <div className="p-8 max-w-md mx-auto">
      <div
        {...getRootProps()}
        className={\`rounded-xl border-2 border-dashed p-10 text-center cursor-pointer transition-colors \${
          isDragActive
            ? "border-violet-500 bg-violet-500/10"
            : "border-gray-700 hover:border-gray-500"
        }\`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-400">
          {isDragActive
            ? "Drop the files here..."
            : "Drag & drop files here, or click to select"}
        </p>
      </div>

      {files.length > 0 && (
        <ul className="mt-4 space-y-1 text-sm text-gray-300">
          {files.map((f, i) => (
            <li key={i}>{f.name} — {(f.size / 1024).toFixed(1)} KB</li>
          ))}
        </ul>
      )}
    </div>
  );
}`,
};
