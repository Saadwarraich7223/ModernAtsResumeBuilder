/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      colors: {
        primary: {
          50: "#f5f8ff",
          100: "#e8edff",
          200: "#cfd8ff",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },

        accent: {
          500: "#22c55e",
          600: "#16a34a",
        },

        surface: "#f8fafc",
        card: "#ffffff",
      },
    },
  },
  plugins: [],
};
