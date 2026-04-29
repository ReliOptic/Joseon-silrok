import { defineConfig } from 'playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.mjs',
  timeout: 35000,
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
  },
  workers: 1,
});
