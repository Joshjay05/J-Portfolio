/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode using a class
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "640px", // Mobile devices
      md: "768px", // Tablets
      lg: "1024px", // Small laptops
      xl: "1280px", // Desktops
      "2xl": "1536px", // Large desktops
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        tracking: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
        },
        scrollProgress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 1s ease-in forwards",
        fadeOut: "fadeOut 1s ease-out forwards",
        tracking: "tracking 0.5s linear infinite",
        scrollProgress: "scrollProgress 0.5s ease-out forwards",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
      },
      colors: {
        dark: {
          DEFAULT: "#1F2937", // Dark mode background
          text: "#F3F4F6", // Dark mode text
        },
        light: {
          DEFAULT: "#F9FAFB", // Light mode background
          text: "#1F2937", // Light mode text
        },
        primary: "#3B82F6", // Primary color for buttons, links, etc.
        secondary: "#6B7280", // Secondary color for text, etc.
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"], // Enable dark mode variant
      textColor: ["dark"], // Enable dark mode variant
      display: ["hover", "focus"], // Display on hover or focus
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
