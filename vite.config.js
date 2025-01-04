import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
const base = "/ice-cream-website-template/";
export default defineConfig(({ mode }) => {
    return {
        base: mode === 'production' ? base : '/',
        publicDir: "./public",
        server: {
            port: 2000,
            open: true,
            strictPort: false,
        },
        preview: {
            port: 4000,
            open: true,
            strictPort: false,
        },
        build: {
            sourcemap: true,
            target: 'es2015'
        },
        css: {},
        plugins: [
            legacy({
                targets: [
                    ">0.1%",
                    "since 2015"
                ]
            }),
        ],
    }
})