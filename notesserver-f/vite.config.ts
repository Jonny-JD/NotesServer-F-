import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            generateScopedName: '[name]__[local]___[hash:base64:5]',
            localsConvention: "camelCaseOnly"
        },
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:8080", // ✅ только домен и порт
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, "/api/v1"),
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    }
});