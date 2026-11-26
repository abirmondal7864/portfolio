import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#08090d", panel: "#101219", line: "rgba(255,255,255,.09)", accent: "#a78bfa" } } },
  plugins: []
};
export default config;
