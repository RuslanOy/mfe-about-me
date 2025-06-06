import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: '/',
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@public': path.resolve(__dirname, './public'),
    },
  },
  server: {
    host: true,
    port: 5101,
  },
  plugins: [
    react(),
    federation({
      name: 'mfeAboutMe',
      filename: 'remoteEntry.js',
      exposes: {
        './AboutMe': './src/app/App.tsx',
      },
      shared: ['react', 'react-dom', '@chakra-ui/react', 'react-i18next', 'i18next'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  assetsInclude: ['**/*.pdf'],
});
