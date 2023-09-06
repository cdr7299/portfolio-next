/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        border: {
          'dark-border': '#30363d',
        },
      },
      backgroundImage: {
        'gradient-dark': `linear-gradient(to bottom right, #0d1117, #0c0e1c)`,
        'gradient-light': `linear-gradient(to bottom right, ${colors.indigo[200]}, ${colors.rose[100]}, ${colors.cyan[200]})`,
        'text-gradient-dark': `linear-gradient(to bottom right, ${colors.black}, ${colors.stone[900]})`,
        'text-gradient-light': `linear-gradient(to right, ${colors.stone[100]}, ${colors.stone[900]})`,
      },
      backgroundColor: {
        'dark-bg': '#161b22',
      },

      fontFamily: {
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        // Fade up and down
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",
        "slide-from-left": "slide-from-left 0.5s",
        "slide-from-right": "slide-from-right 0.5s",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // Fade up and down
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        // slide from left
        "slide-from-left": {
          "0%": {
            opacity: 0,
            transform: "translateX(-30px)",
          },
          "50%": {
            opacity: 0.4,
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
        "slide-from-right": {
          "0%": {
            opacity: 0,
            transform: "translateX(30px)",
          },
          "50%": {
            opacity: 0.4,
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
