// // /* eslint-disable no-undef */
// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   darkMode: "class", // Enable dark mode using a class
// //   content: [
// //     "./pages/**/*.{js,jsx}",
// //     "./components/**/*.{js,jsx}",
// //     "./app/**/*.{js,jsx}",
// //     "./src/**/*.{js,jsx}",
// //   ],
// //   theme: {
// //     container: {
// //       center: true,
// //       padding: "2rem",
// //       screens: {
// //         "2xl": "1400px",
// //       },
// //     },
// //     screens: {
// //       sm: "640px", // Mobile devices
// //       md: "768px", // Tablets
// //       lg: "1024px", // Small laptops
// //       xl: "1280px", // Desktops
// //       "2xl": "1536px", // Large desktops
// //     },
// //     extend: {
// //       keyframes: {
// //         "accordion-down": {
// //           from: { height: "0" },
// //           to: { height: "var(--radix-accordion-content-height)" },
// //         },
// //         "accordion-up": {
// //           from: { height: "var(--radix-accordion-content-height)" },
// //           to: { height: "0" },
// //         },
// //         fadeIn: {
// //           "0%": { opacity: 0 },
// //           "100%": { opacity: 1 },
// //         },
// //         fadeOut: {
// //           "0%": { opacity: 1 },
// //           "100%": { opacity: 0 },
// //         },
// //         tracking: {
// //           "0%, 100%": { transform: "translateX(0)" },
// //           "50%": { transform: "translateX(5px)" },
// //         },
// //         scrollProgress: {
// //           "0%": { width: "0%" },
// //           "100%": { width: "100%" },
// //         },
// //       },
// //       animation: {
// //         "accordion-down": "accordion-down 0.2s ease-out",
// //         "accordion-up": "accordion-up 0.2s ease-out",
// //         fadeIn: "fadeIn 1s ease-in forwards",
// //         fadeOut: "fadeOut 1s ease-out forwards",
// //         tracking: "tracking 0.5s linear infinite",
// //         scrollProgress: "scrollProgress 0.5s ease-out forwards",
// //       },
// //       fontFamily: {
// //         poppins: '"Poppins", sans-serif',
// //       },
// //       colors: {
// //         dark: {
// //           DEFAULT: "#1F2937", // Dark mode background
// //           text: "#F3F4F6", // Dark mode text
// //         },
// //         light: {
// //           DEFAULT: "#F9FAFB", // Light mode background
// //           text: "#1F2937", // Light mode text
// //         },
// //         primary: "#3B82F6", // Primary color for buttons, links, etc.
// //         secondary: "#6B7280", // Secondary color for text, etc.
// //       },
// //       spacing: {
// //         128: "32rem",
// //         144: "36rem",
// //       },
// //       fontSize: {
// //         xs: ".75rem",
// //         sm: ".875rem",
// //         base: "1rem",
// //         lg: "1.125rem",
// //         xl: "1.25rem",
// //         "2xl": "1.5rem",
// //         "3xl": "1.875rem",
// //         "4xl": "2.25rem",
// //         "5xl": "3rem",
// //         "6xl": "4rem",
// //       },
// //     },
// //   },
// //   variants: {
// //     extend: {
// //       backgroundColor: ["dark"], // Enable dark mode variant
// //       textColor: ["dark"], // Enable dark mode variant
// //       display: ["hover", "focus"], // Display on hover or focus
// //     },
// //   },
// //   plugins: [require("@tailwindcss/forms")],
// // };
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class", // Enable class-based dark mode
//   theme: {
//     extend: {
//       // Custom Color Palette
//       colors: {
//         // Dark Mode Colors
//         dark: {
//           bg: {
//             primary: "#0a0e27",
//             secondary: "#141937",
//             tertiary: "#1e2749",
//             quaternary: "#252d5a",
//           },
//           text: {
//             primary: "#e6e9f0",
//             secondary: "#a7afc7",
//             tertiary: "#6b7492",
//             quaternary: "#4a5270",
//           },
//           accent: {
//             primary: "#00d9ff",
//             secondary: "#7b2cbf",
//             tertiary: "#ff006e",
//           },
//           border: "#2a3155",
//         },
//         // Light Mode Colors
//         light: {
//           bg: {
//             primary: "#ffffff",
//             secondary: "#f8f9fc",
//             tertiary: "#e8ebf7",
//             quaternary: "#d1d5e4",
//           },
//           text: {
//             primary: "#1a1d2e",
//             secondary: "#4a5270",
//             tertiary: "#6b7492",
//             quaternary: "#8b92ae",
//           },
//           accent: {
//             primary: "#0066ff",
//             secondary: "#7b2cbf",
//             tertiary: "#ff006e",
//           },
//           border: "#d1d5e4",
//         },
//         // Semantic Colors
//         success: {
//           light: "#059669",
//           dark: "#10b981",
//         },
//         error: {
//           light: "#dc2626",
//           dark: "#ef4444",
//         },
//         warning: {
//           light: "#d97706",
//           dark: "#f59e0b",
//         },
//         info: {
//           light: "#2563eb",
//           dark: "#3b82f6",
//         },
//       },

//       // Font Families
//       fontFamily: {
//         sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
//         mono: ["JetBrains Mono", "Fira Code", "Courier New", "monospace"],
//         display: ["Clash Display", "Inter", "system-ui", "sans-serif"],
//       },

//       // Custom Animations
//       animation: {
//         "fade-in": "fadeIn 0.5s ease-in-out",
//         "fade-in-up": "fadeInUp 0.6s ease-out",
//         "slide-in-left": "slideInLeft 0.6s ease-out",
//         "slide-in-right": "slideInRight 0.6s ease-out",
//         "scale-in": "scaleIn 0.4s ease-out",
//         float: "float 3s ease-in-out infinite",
//         "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//         gradient: "gradient 8s linear infinite",
//         glow: "glow 2s ease-in-out infinite",
//         "spin-slow": "spin 3s linear infinite",
//       },

//       // Custom Keyframes
//       keyframes: {
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//         fadeInUp: {
//           "0%": { opacity: "0", transform: "translateY(30px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         slideInLeft: {
//           "0%": { opacity: "0", transform: "translateX(-30px)" },
//           "100%": { opacity: "1", transform: "translateX(0)" },
//         },
//         slideInRight: {
//           "0%": { opacity: "0", transform: "translateX(30px)" },
//           "100%": { opacity: "1", transform: "translateX(0)" },
//         },
//         scaleIn: {
//           "0%": { opacity: "0", transform: "scale(0.9)" },
//           "100%": { opacity: "1", transform: "scale(1)" },
//         },
//         float: {
//           "0%, 100%": { transform: "translateY(0px)" },
//           "50%": { transform: "translateY(-20px)" },
//         },
//         gradient: {
//           "0%, 100%": { backgroundPosition: "0% 50%" },
//           "50%": { backgroundPosition: "100% 50%" },
//         },
//         glow: {
//           "0%, 100%": {
//             opacity: "1",
//             boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)",
//           },
//           "50%": {
//             opacity: "0.8",
//             boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)",
//           },
//         },
//       },

//       // Custom Box Shadows
//       boxShadow: {
//         glow: "0 0 20px rgba(0, 217, 255, 0.3)",
//         "glow-md": "0 0 30px rgba(0, 217, 255, 0.4)",
//         "glow-lg": "0 0 40px rgba(0, 217, 255, 0.5)",
//         "glow-xl": "0 0 60px rgba(0, 217, 255, 0.6)",
//         "inner-glow": "inset 0 2px 4px 0 rgba(0, 217, 255, 0.1)",
//       },

//       // Custom Background Images
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//         "gradient-mesh": "linear-gradient(135deg, #00d9ff 0%, #7b2cbf 100%)",
//       },

//       // Custom Backdrop Blur
//       backdropBlur: {
//         xs: "2px",
//       },

//       // Custom Z-index
//       zIndex: {
//         60: "60",
//         70: "70",
//         80: "80",
//         90: "90",
//         100: "100",
//       },

//       // Custom Spacing
//       spacing: {
//         128: "32rem",
//         144: "36rem",
//       },

//       // Custom Border Radius
//       borderRadius: {
//         "4xl": "2rem",
//       },

//       // Custom Container
//       container: {
//         center: true,
//         padding: {
//           DEFAULT: "1rem",
//           sm: "2rem",
//           lg: "4rem",
//           xl: "5rem",
//           "2xl": "6rem",
//         },
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          bg: {
            primary: "#0a0e27",
            secondary: "#141937",
            tertiary: "#1e2749",
            quaternary: "#252d5a",
          },
          text: {
            primary: "#e6e9f0",
            secondary: "#a7afc7",
            tertiary: "#6b7492",
            quaternary: "#4a5270",
          },
          accent: {
            primary: "#00d9ff",
            secondary: "#7b2cbf",
            tertiary: "#ff006e",
          },
          border: "#2a3155",
        },
        light: {
          bg: {
            primary: "#ffffff",
            secondary: "#f8f9fc",
            tertiary: "#e8ebf7",
            quaternary: "#d1d5e4",
          },
          text: {
            primary: "#1a1d2e",
            secondary: "#4a5270",
            tertiary: "#6b7492",
            quaternary: "#8b92ae",
          },
          accent: {
            primary: "#0066ff",
            secondary: "#7b2cbf",
            tertiary: "#ff006e",
          },
          border: "#d1d5e4",
        },
        success: {
          light: "#059669",
          dark: "#10b981",
        },
        error: {
          light: "#dc2626",
          dark: "#ef4444",
        },
        warning: {
          light: "#d97706",
          dark: "#f59e0b",
        },
        info: {
          light: "#2563eb",
          dark: "#3b82f6",
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Courier New", "monospace"],
        display: ["Clash Display", "Inter", "system-ui", "sans-serif"],
      },

      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradient: "gradient 8s linear infinite",
        glow: "glow 2s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
        shimmer: "shimmer 2s linear infinite", // NEW! For video placeholders
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        glow: {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)",
          },
        },
        // NEW! Shimmer animation for video placeholders
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },

      boxShadow: {
        glow: "0 0 20px rgba(0, 217, 255, 0.3)",
        "glow-md": "0 0 30px rgba(0, 217, 255, 0.4)",
        "glow-lg": "0 0 40px rgba(0, 217, 255, 0.5)",
        "glow-xl": "0 0 60px rgba(0, 217, 255, 0.6)",
        "inner-glow": "inset 0 2px 4px 0 rgba(0, 217, 255, 0.1)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh": "linear-gradient(135deg, #00d9ff 0%, #7b2cbf 100%)",
      },

      backdropBlur: {
        xs: "2px",
      },

      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },

      spacing: {
        128: "32rem",
        144: "36rem",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
