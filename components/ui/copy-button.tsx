"use client";
import { useState } from "react";

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="text-xs text-white/50 hover:text-white/90 transition-colors px-2 py-1 rounded border border-white/20 hover:border-white/40 font-mono shrink-0"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
