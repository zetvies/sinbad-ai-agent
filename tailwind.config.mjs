/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "transparent-black": "rgb(0,0,0,0.3)",
        current: "currentColor",
        "dark-green": "#005128",
        green: "#66C51C",
        "light-green": "#E0F3D2",
        tosca: "#00C37D",
        "light-tosca": "#E1FFF4",
        cream: "#C3B59B",
        "light-cream": "#EEEEEE",
        "white-100": "#F7F7F7",
        grey: "#F1F5F5",
        orange: "#FF9933",
        "light-orange": "rgb(255,194,133,.5)",
        "transparent-orange": "rgb(255,153,51,.1)",
      },
    },
  },
  plugins: [],
};
