import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
   base: '/',
   plugins: [react()],
   resolve: {
      alias: {
         '@app': '/src/app',
         '@assets': '/src/assets',
         '@components': '/src/components',
         '@config': '/src/config',
         '@data': '/src/data',
         '@context': '/src/context',
         '@hooks': '/src/hooks',
         '@routes': '/src/routes',
         '@services': '/src/services',
         '@utils': '/src/utils'
      }
   },
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: '@use "@assets/styles/mixins" as *;'
         }
      }
   }
});
