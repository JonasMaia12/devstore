import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
      },
      gridTemplateRows: {
        app: "min-content max-content",
      },
    },
  },
  plugins: [],
} satisfies Config
