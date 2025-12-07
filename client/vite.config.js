import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  return {
    server: {
      proxy:
        mode === "development"
          ? {
              "/api": {
                target: "http://localhost:3000",
                changeOrigin: true,
              },
            }
          : undefined, // No proxy in production
    },

    plugins: [react()],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
