/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#22808D",
        "secondary": "#531365",
        "background-light": "#F8FAFC",
        "background-dark": "#1F2937",
        "text-light": "#111827",
        "text-dark": "#E5E7EB",
        "text-secondary-light": "#6B7280",
        "text-secondary-dark": "#9CA3AF",
        "border-light": "#E0E7FF",
        "border-dark": "#374151"
      },
      fontFamily: {
        "display": ["Montserrat", "sans-serif"],
        "body": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
