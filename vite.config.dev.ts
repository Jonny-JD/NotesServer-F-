import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            generateScopedName: '[name]__[local]__[hash:base64:5]',
        },
    },
    server: {
        host: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                secure: false,
            }
        },
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});