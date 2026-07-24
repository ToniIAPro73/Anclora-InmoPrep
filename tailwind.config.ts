import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)"],
        display: ["var(--font-display)"]
      },
      colors: {
        ink: "var(--color-ink)",
        harbor: "var(--color-harbor)",
        gold: "var(--color-gold)",
        emerald: "var(--color-emerald)",
        paper: "var(--color-paper)",
        surface: "var(--color-surface)",
        line: "var(--color-line)",
        muted: "var(--color-muted)"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(22, 32, 51, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
