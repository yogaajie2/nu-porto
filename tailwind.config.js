/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 500ms 3s forwards",
        "fade-in-out": "fade-in 500ms 2s infinite alternate",
        "fade-in-project-year": "fade-in 500ms 1s forwards",
        "fade-in-project-summary": "fade-in 500ms 1.5s forwards",
        "fade-in-section": "fade-in 500ms forwards",
        opening: "opening 1.5s",

        "slide-down-subtitle":
          "slide-down-subtitle 0.5s 2s both, fade-in 0.5s 2s both",

        "typed-project-title": "typed 750ms steps(25, end) 500ms both",
        "typed-section": "typed 500ms steps(10, end) 500ms both",
        "typed-title": "typed 0.75s steps(15, end) 1.5s both",
      },

      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },

        opening: {
          "0%": { opacity: "0", left: "50%" },
          "50%": { opacity: "1", left: "50%" },
          "75%": { opacity: "1", left: "50%" },
          "100%": { opacity: "1", left: "0%" },
        },

        "slide-down-subtitle": {
          "0%": { "margin-top": "-2rem" },
          "100%": { "margin-top": "0rem" },
        },

        typed: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },

      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },

    colors: {
      black: "#000",
      current: "currentColor",
      "dark-blue": "#0f172a",
      "dark-blue-lighter": "#16213c",
      green: "#00FF83",
      transparent: "transparent",
      white: "#fff",
    },

    container: {
      center: true,

      padding: {
        DEFAULT: "2rem",
        md: "4rem",
        lg: "6rem",
        xl: "8rem",
      },
    },

    fontFamily: {
      heading: ["Chakra Petch", "sans-serif"],
      body: ["Asap Variable", "sans-serif"],
    },
  },

  plugins: [],
};
