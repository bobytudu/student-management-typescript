import { defineConfig } from 'vite'
import path from 'path'
// import react from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      // Add any other aliases you need here.
      src: path.resolve(__dirname, "src"),
      pages: path.resolve(__dirname, "src/pages"),
      layouts: path.resolve(__dirname, "src/layouts"),
      components: path.resolve(__dirname, "src/components"),
      utils: path.resolve(__dirname, "src/utils"),
      assets: path.resolve(__dirname, "src/assets"),
      sections: path.resolve(__dirname, "src/sections"),
      services: path.resolve(__dirname, "src/services"),
      // redux: path.resolve(__dirname, "src/redux"),
    },
  },
  esbuild: {
    loader: "tsx",
  },
  build: {
    outDir: "build",
  },
});
