import { defineConfig } from 'vite';

export default defineConfig(async ({mode}) => {
    if (mode === 'development') {
        const config = await import('./vite.config.dev');
        return config.default;
    }
    const configCurrent = await import('./vite.config.prod');
    return configCurrent.default;
});
