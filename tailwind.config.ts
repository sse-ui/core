import type { Config } from "tailwindcss";

export default {
  content: ["./theme/*.{ts,tsx,js,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindFunctions: ["tv"],
} as Config;
