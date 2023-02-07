# vite-plugin-youdeyiwu-mp-axios

vite-plugin-youdeyiwu-mp-axios 尤得一物-小程序 axios 插件

简单移除微信小程序中不支持 axios 定义的 FormData 和 Blob

# 1. 相关

尤得一物-小程序 [youdeyiwu-mp](https://github.com/dafengzhen/youdeyiwu-mp)

# 2. 安装

- npm

```bash
npm install -D @youdeyiwu/vite-plugin-mp-axios
```

- yarn

```bash
yarn add -D @youdeyiwu/vite-plugin-mp-axios
```

# 3. 使用

- 编辑 vite.config.ts 文件添加插件

```typescript
import {defineConfig} from 'vite';
import youdeyiwuMpAxios from '@youdeyiwu/vite-plugin-mp-axios';

export default defineConfig({
    plugins: [
        // ...
        youdeyiwuMpAxios()
    ]
})
```

# 4. License

[MIT](https://opensource.org/licenses/MIT)

