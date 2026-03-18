/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        accent: "#00f2ff",
        clay: {
          bg: "#1a2a4a",
          shadow1: "rgba(0, 0, 0, 0.4)",
          shadow2: "rgba(255, 255, 255, 0.05)",
        }
      },
      boxShadow: {
        'clay-sm': '8px 8px 16px var(--clay-shadow-dark), -8px -8px 16px var(--clay-shadow-light)',
        'clay-md': '12px 12px 24px var(--clay-shadow-dark), -12px -12px 24px var(--clay-shadow-light)',
        'clay-lg': '20px 20px 40px var(--clay-shadow-dark), -20px -20px 40px var(--clay-shadow-light)',
        'clay-inset': 'inset 4px 4px 8px var(--clay-shadow-dark), inset -4px -4px 8px var(--clay-shadow-light)',
      }
    },
  },
  plugins: [],
}
