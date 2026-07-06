import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig(({ command, mode }) => {
  const isBuild = command === "build";

  return {
    base: isBuild ? "/tutorial/dist/" : "/",
    root: ".",
    server: {
      open: "/main/index.html",
    },
    build: {
      outDir: "docs",
      rollupOptions: {
        input: {
          main: resolve(__dirname, "main", "index.html"),
          sass: resolve(__dirname, "SASS", "sass.html"),
          tutorCSS: resolve(__dirname, "tutorCSS", "index.html"),
          vite: resolve(__dirname, "vite", "vite.html"),
          VSCode: resolve(__dirname, "VSCode", "index.html"),
          git: resolve(__dirname, "git", "index.html"),
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
  };
});
