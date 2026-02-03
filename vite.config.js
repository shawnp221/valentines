import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',   // default, but explicit
    },
    base: './',         // use relative paths for CSS/JS/assets
});
