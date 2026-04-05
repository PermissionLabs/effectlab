"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function ReactDropzoneDemo() {
  const [files, setFiles] = useState<{ name: string; size: number }[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [
      ...prev,
      ...acceptedFiles.map((f) => ({ name: f.name, size: f.size })),
    ]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
      "application/pdf": [".pdf"],
    },
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-8 gap-5">
      <div
        {...getRootProps()}
        className={`w-full max-w-sm rounded-2xl border-2 border-dashed p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 ${
          isDragActive
            ? "border-violet-500 bg-violet-500/10 shadow-[0_0_24px_rgba(139,92,246,0.15)]"
            : "border-white/15 bg-white/[0.02] hover:border-white/30 hover:bg-white/5"
        }`}
      >
        <input {...getInputProps()} />

        {/* Upload icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-10 h-10 transition-colors duration-300 ${
            isDragActive ? "stroke-violet-400" : "stroke-white/30"
          }`}
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>

        <div className="flex flex-col items-center gap-1">
          <span
            className={`text-sm font-medium transition-colors duration-300 ${
              isDragActive ? "text-violet-400" : "text-white/60"
            }`}
          >
            {isDragActive ? "Drop files here" : "Drag & drop files here"}
          </span>
          <span className="text-white/30 text-xs">
            or click to browse (images, PDF)
          </span>
        </div>
      </div>

      {/* File list */}
      {files.length > 0 && (
        <div className="w-full max-w-sm flex flex-col gap-2">
          {files.slice(-3).map((file, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-4 py-2 rounded-xl bg-white/5 border border-white/5"
            >
              <span className="text-white/70 text-xs truncate max-w-[200px]">
                {file.name}
              </span>
              <span className="text-white/30 text-xs">
                {(file.size / 1024).toFixed(1)} KB
              </span>
            </div>
          ))}
          {files.length > 3 && (
            <span className="text-white/20 text-xs text-center">
              +{files.length - 3} more file{files.length - 3 !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
