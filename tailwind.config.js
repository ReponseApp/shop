module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      source: ["Inter"],
    },
    extend: {
      backgroundImage: {
        'homegradiant': "url('/assets/Shop.png/')",
      }
    },
  },
  plugins: [],
};
