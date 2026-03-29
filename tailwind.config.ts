import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0066FF",
        "primary-dark": "#0052CC",
        accent: "#00C896",
        "accent-dark": "#00A87D",
        surface: "#F8F9FC",
      },
      borderRadius: {
        card: "12px",
        btn: "12px",
        lg: "16px",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
