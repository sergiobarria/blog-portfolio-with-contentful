const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // default font family
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        80: "80rem",
        "screen-center": "calc(100vh - 5rem - 9rem)",
      },
      height: {
        "h-1-px": "1px",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen-3/4": "calc(100vh - 100vh / 3)",
        "screen-4/5": "calc(100vh - 100vh / 5)",
      },
      colors: {
        grey: {
          50: "#ffffff",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#191919",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
