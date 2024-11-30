// tailwind.config.ts
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Añadimos la fuente Roboto
      },
      colors: {
        primary: "#1E40AF",  // Añadimos un color personalizado
        secondary: "#1E293B",
      },
    },
  },
  plugins: [],
};
