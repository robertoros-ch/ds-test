import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), tailwindcss()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import vanillaExtractPlugin from "@vanilla-extract/vite-plugin";
//
// export default defineConfig({
//   plugins: [react(), vanillaExtractPlugin()],
// });
