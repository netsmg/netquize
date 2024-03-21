import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: { enabled: true },
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "android-chrome-512x512.png",
        "Logo.svg",
        "Logo.png",
      ],
      manifest: {
        name: "NetQuize",
        short_name: "NetQuize",
        display: "standalone",
        theme_color: "hsl(280, 87%, 65%)",
        background_color: "hsl(280, 87%, 65%)",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
