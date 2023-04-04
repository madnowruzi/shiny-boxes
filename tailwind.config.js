import { glowPlugin, glowColorPlugin } from "./glow-plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [glowPlugin, glowColorPlugin],
};
