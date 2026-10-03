/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f3eee6",
        sand: "#e6ddd0",
        ink: "#12100e",
        coal: "#1b1815",
        brass: "#c9a46a",
      },
      fontFamily: { sans: ["var(--font-vazir)", "system-ui", "sans-serif"] },
      transitionTimingFunction: { expo: "cubic-bezier(0.16, 1, 0.3, 1)" },
    },
  },
  plugins: [],
};
