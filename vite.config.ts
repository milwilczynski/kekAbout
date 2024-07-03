import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/

export default ({ command, mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        appType: 'spa',
        server: {
            host: '0.0.0.0',
            port: 3000,
        },
        plugins: [
            react(),
            svgr({
                svgrOptions: {
                    // svgr options
                },
            }),
            tsconfigPaths(),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "src/assets/global.scss";`,
                },
            },
        },
    });
};
