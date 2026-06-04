const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: process.env.CI ? 2 : 1,
  reporter: [
    ['html', {
      outputFolder: 'reports/html',
      open: 'never',
      embedScreenshots: true,
      embedVideos: true
    }],
    ['list']
  ],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    baseURL: process.env.BASE_URL || 'https://the-internet.herokuapp.com',
    trace: 'on-first-retry'
  },
  projects: [
    { name: 'Desktop Chrome', use: { ...devices['Desktop Chrome'] } },
    // { name: 'Desktop Firefox', use: { ...devices['Desktop Firefox'] } },
  ],
});