import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "../dist/stats.html",
      open: true,
      title: "Bundle Visualizer",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: "client",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) {
              return 'vendor-react-dom';
            }
            if (id.includes('react') || id.includes('wouter')) {
              return 'vendor-react';
            }
            if (id.includes('@tanstack/react-query')) {
                return 'vendor-tanstack-query';
            }
            if (id.includes('framer-motion')) {
                return 'vendor-framer-motion';
            }
            if (id.includes('recharts')) {
                return 'vendor-recharts';
            }
            if (id.includes('@radix-ui')) {
                return 'vendor-radix-ui';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});