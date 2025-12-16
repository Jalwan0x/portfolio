import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: "#0b1021",
        accent: "#5ef0c1",
        accentMuted: "#a7ffe3",
        accentDark: "#2dd89f",
        accentLight: "#a0ffd8",
        text: "#d4dce9",
        textBright: "#ffffff",
        subtle: "#8a9bb5",
        danger: "#ff6b6b",
        warning: "#ffd93d"
      },
      fontFamily: {
        display: ["'Sora'", "ui-sans-serif", "system-ui"],
        body: ["'Inter'", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 10px 40px rgba(94, 240, 193, 0.2)",
        glowStrong: "0 20px 60px rgba(94, 240, 193, 0.3)",
        glowDim: "0 5px 20px rgba(94, 240, 193, 0.1)"
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
        slideUp: "slideUp 0.6s ease-out",
        slideDown: "slideDown 0.4s ease-out",
        float: "float 3s ease-in-out infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: [forms, animate]
};

export default config;
