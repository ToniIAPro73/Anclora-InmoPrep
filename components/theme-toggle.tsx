"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

const THEME_KEY = "anclora-inmoprep-theme";

export function ThemeToggle() {
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("theme");
    const saved = window.localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = requested ? requested === "dark" : saved ? saved === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", next);
    if (requested === "dark" || requested === "light") {
      window.localStorage.setItem(THEME_KEY, requested);
    }
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem(THEME_KEY, next ? "dark" : "light");
  }

  return (
    <button
      className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-slate-300 bg-white text-ink shadow-sm"
      onClick={toggle}
      aria-label="Cambiar tema"
      title="Cambiar tema"
    >
      <Sun className="hidden h-5 w-5 text-gold dark:block" />
      <Moon className="h-5 w-5 text-harbor dark:hidden" />
    </button>
  );
}
