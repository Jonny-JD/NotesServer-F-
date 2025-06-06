import { defineConfig } from 'vite';

export default defineConfig(async ({mode}) => {
    if (mode === 'development') {
        const config = await import('./vite.config.dev.ts');
        return config.default;
    }
    const configCurrent = await import('./vite.config.prod.ts');
    return configCurrent.default;
});
