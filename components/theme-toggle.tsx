"use client";

import { useEffect, useState } from "react";

type Choice = "system" | "light" | "dark";

const KEY = "devden-theme";
const ORDER: Choice[] = ["system", "light", "dark"];
const LABEL: Record<Choice, string> = {
  system: "Theme: match system",
  light: "Theme: light",
  dark: "Theme: dark",
};

function apply(choice: Choice) {
  const root = document.documentElement;
  if (choice === "system") delete root.dataset.theme;
  else root.dataset.theme = choice;
}

/** Cycles System → Light → Dark, like the app's own Appearance setting. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [choice, setChoice] = useState<Choice>("system");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "light" || saved === "dark") setChoice(saved);
    } catch {
      // Storage can be blocked; the OS setting still applies.
    }
  }, []);

  const next = () => {
    const value = ORDER[(ORDER.indexOf(choice) + 1) % ORDER.length];
    setChoice(value);
    apply(value);
    try {
      if (value === "system") localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, value);
    } catch {
      // Ignore: the choice still applies for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={next}
      aria-label={`${LABEL[choice]}. Click to change.`}
      title={LABEL[choice]}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-fg-2 transition-colors hover:text-fg ${className}`}
    >
      {choice === "system" && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 3.5a8.5 8.5 0 0 1 0 17Z" fill="currentColor" />
        </svg>
      )}
      {choice === "light" && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )}
      {choice === "dark" && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20 14.6A8 8 0 0 1 9.4 4a8 8 0 1 0 10.6 10.6Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
