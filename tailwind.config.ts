import type { Config } from "tailwindcss";
export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: {
      bg: "rgb(var(--bg) / <alpha-value>)", card: "rgb(var(--card) / <alpha-value>)",
      ink: "rgb(var(--ink) / <alpha-value>)", muted: "rgb(var(--muted) / <alpha-value>)",
      line: "rgb(var(--line) / <alpha-value>)", accent: "rgb(var(--accent) / <alpha-value>)",
      navy: "rgb(var(--navy) / <alpha-value>)"
    },
    fontFamily: { serif: ["var(--font-serif)", "Georgia", "serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    boxShadow: { lift: "0 1px 0 rgb(var(--line)), 0 24px 48px -28px rgb(var(--navy) / .35)" }
  }},
  plugins: [require("@tailwindcss/typography")]
} satisfies Config;
