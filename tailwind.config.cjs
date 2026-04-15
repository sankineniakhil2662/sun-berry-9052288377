/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",

        heading: "rgb(var(--color-heading) / <alpha-value>)",
        body: "rgb(var(--color-body) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",

        brand: "rgb(var(--color-brand) / <alpha-value>)",
        brandHover: "rgb(var(--color-brand-hover) / <alpha-value>)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        hover: "var(--shadow-hover)",
      },
      borderRadius: {
        card: "var(--radius-card)",
        button: "var(--radius-button)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
      },
      
      fontWeight: {
        light: "var(--font-light)",
        normal: "var(--font-regular)",
        medium: "var(--font-medium)",
        semibold: "var(--font-semibold)",
        bold: "var(--font-bold)",
      },
           
    },
  },
  plugins: [],
};
  
