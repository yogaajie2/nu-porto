/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 500ms 3s forwards",
        "fade-in-out": "fade-in 500ms infinite alternate",
        // typed: "typed 0.75s steps(15, end) 2s both",
      },

      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
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
      green: "#00FF83",
      transparent: "transparent",
      white: "#fff",
    },

    fontFamily: {
      heading: ["Chakra Petch", "sans-serif"],
      body: ["Asap Variable", "sans-serif"],
    },
  },

  plugins: [],
};
