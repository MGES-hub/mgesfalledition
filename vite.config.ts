import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackRouter(),
    react(),
    cloudflare(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
