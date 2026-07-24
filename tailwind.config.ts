import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        surfaceRaised: "var(--color-surface-raised)",
        line: "var(--color-line)",
        muted: "var(--color-muted)",
        danger: "var(--color-danger)"
      },
      borderRadius: {
        md: "0.75rem",
        lg: "1rem",
        xl: "1.375rem",
        "2xl": "1.75rem"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(22, 32, 51, 0.12)",
        card: "0 1px 2px rgba(22, 32, 51, 0.06), 0 12px 32px -12px rgba(22, 32, 51, 0.16)",
        cardHover: "0 1px 2px rgba(22, 32, 51, 0.08), 0 24px 48px -16px rgba(22, 32, 51, 0.26)",
        glow: "0 0 0 1px color-mix(in srgb, var(--color-gold) 35%, transparent), 0 8px 24px -8px color-mix(in srgb, var(--color-gold) 45%, transparent)"
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, color-mix(in srgb, var(--color-gold) 92%, white 8%), color-mix(in srgb, var(--color-gold) 78%, black 6%))",
        "harbor-gradient": "linear-gradient(135deg, var(--color-harbor), color-mix(in srgb, var(--color-harbor) 70%, black 20%))"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
