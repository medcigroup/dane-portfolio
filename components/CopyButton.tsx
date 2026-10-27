"use client";

import { useState } from "react";

export function CopyButton({ text, label, copiedLabel, className }: { text: string; label: string; copiedLabel: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  return <button type="button" className={className} onClick={copy} aria-live="polite">{copied ? copiedLabel : label}</button>;
}
