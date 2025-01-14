import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Portifolio-Pessoal/", // Base do repositório no GitHub Pages
});
