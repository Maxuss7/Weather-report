import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 5173,
        watch: {
            usePolling: true,
        },
    },
    root: path.resolve(__dirname),
    build: {
        outDir: path.resolve(__dirname, "/dist"),
    },
});
