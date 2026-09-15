import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // Relative base so the built assets resolve correctly on GitHub Pages.
  base: "./",
  plugins: [react(), tailwindcss()],
});
