import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Accessibility: Tailwind's slate-500 (#64748b) is 4.47:1 on the #f6f8fb surface; this slightly darker
        // tone reaches WCAG AA (≥4.5:1) on white and on the light surface without a visible design change.
        slate: { 500: "#5b6b80" },
      },
    },
  },
  plugins: [],
};
export default config;
