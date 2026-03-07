/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        glass: "0 24px 80px rgba(15, 23, 42, 0.45)",
        glow: "0 0 80px rgba(125, 211, 252, 0.18)"
      },
      colors: {
        midnight: "#040816",
        frost: "rgba(203, 213, 225, 0.1)"
      },
      fontFamily: {
        display: ["'Manrope'", "sans-serif"],
        body: ["'Manrope'", "sans-serif"]
      },
      backdropBlur: {
        glass: "28px"
      },
      backgroundImage: {
        "soft-radial": "radial-gradient(circle at top, rgba(56, 189, 248, 0.22), transparent 34%), radial-gradient(circle at bottom left, rgba(244, 114, 182, 0.12), transparent 30%)"
      },
      animation: {
        drift: "drift 18s linear infinite",
        float: "float 9s ease-in-out infinite"
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate3d(-2%, 2%, 0)" },
          "100%": { transform: "translate3d(2%, -2%, 0)" }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -8px, 0)" }
        }
      }
    }
  },
  plugins: []
};
