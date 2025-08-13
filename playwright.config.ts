import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

// Centralized timeouts and base URLs are read via env.ts at runtime as needed.
export default defineConfig({
    testDir: './tests',
    timeout: 45_000,
    expect: { timeout: 5_000 },
    fullyParallel: true,
    retries: 1,
    workers: undefined,
    reporter: [
        ['list'],
        ['html', { open: 'never', outputFolder: 'playwright-report' }]
    ],
    use: {
        // UI base URL; overridable via env.ts getters within tests/POMs
        baseURL: process.env.UI_BASE_URL || 'https://www.saucedemo.com',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'off',
        actionTimeout: 10_000,
        navigationTimeout: 20_000,
        testIdAttribute: 'data-test'
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] }
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] }
        }
    ]
});


