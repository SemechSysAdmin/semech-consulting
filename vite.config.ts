import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      spa: {
        enabled: true,
        maskPath: "/app-shell", // shell renders using this path instead of "/"
        prerender: {
          enabled: true,
          crawlLinks: false,
          retryCount: 3,
        },
      },
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
        retryCount: 3,
      },
      pages: [{ path: "/", prerender: { enabled: true, outputPath: "/index.html" } }],
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
  },
});
