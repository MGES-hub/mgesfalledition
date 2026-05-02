import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { tanstackStartVite } from "@tanstack/start/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackRouter(),
    tanstackStartVite(),
    cloudflare(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
