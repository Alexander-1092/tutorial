import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "main", "index.html"),
        sass: resolve(__dirname, "SASS", "sass.html"),
        tutorCSS: resolve(__dirname, "tutorCSS", "index.html"),
        vite: resolve(__dirname, "vite", "vite.html"),
        VSCode: resolve(__dirname, "VSCode", "index.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@scss": resolve(__dirname, "./src/scss"),
    },
  },
  plugins: [
    ViteImageOptimizer({
      disable: process.env.NODE_ENV !== "production",
    }),
  ],
});
