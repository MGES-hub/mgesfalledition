import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { reactStart } from "@tanstack/react-start/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    cloudflare(),
    tanstackRouter(),
    reactStart(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
