/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jestConfig from './jest.config.cjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // test: jestConfig.test,
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: jestConfig.test,
  //   setupFiles: './setupTests.js',
    css: true,
  },
})
