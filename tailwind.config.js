/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      animation: {
        "fade-in-out": "fade-in-out 500ms infinite alternate",
      },

      keyframes: {
        "fade-in-out": {
          from: { opacity: "0" },
          to: { opacity: "1" },
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
