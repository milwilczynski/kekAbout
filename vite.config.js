var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default (function (_a) {
    var command = _a.command, mode = _a.mode;
    process.env = __assign(__assign({}, process.env), loadEnv(mode, process.cwd()));
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
                    additionalData: "@import \"src/assets/global.scss\";",
                },
            },
        },
    });
});
