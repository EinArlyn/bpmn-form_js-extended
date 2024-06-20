import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import preact from "@preact/preset-vite";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), preact(), svgLoader()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      react: fileURLToPath(new URL("preact/compat", import.meta.url)),
      "react-dom": fileURLToPath(new URL("preact/compat", import.meta.url)),
      "../preact": fileURLToPath(new URL("preact", import.meta.url)),
      "..preact/hooks": fileURLToPath(new URL("preact/hooks", import.meta.url)),
      "../preact/jsx-runtime": fileURLToPath(
        new URL("preact/jsx-runtime", import.meta.url)
      ),
    },
  },
});
