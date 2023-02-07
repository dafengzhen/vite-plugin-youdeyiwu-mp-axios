import { type PluginOption } from 'vite';

export default function youdeyiwuMpAxiosVitePlugin(): PluginOption {
    return {
        name: 'vite-plugin-youdeyiwu-mp-axios',
        transform: (_code, _id) => {
            if (_id.endsWith('node_modules/axios/lib/platform/browser/index.js')) {
                return {
                    code: _code.replace(/FormData,\s*Blob/g, ''),
                    map: null,
                };
            }
            return null;
        },
    };
}
