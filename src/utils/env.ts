import dotenv from 'dotenv';

dotenv.config();

export type EnvironmentName = 'local' | 'ci';

export const env = {
    environment(): EnvironmentName {
        const value = process.env.NODE_ENV === 'production' ? 'ci' : 'local';
        return value;
    },

    uiBaseUrl(): string {
        return process.env.UI_BASE_URL || 'https://www.saucedemo.com';
    },

    apiBaseUrl(): string {
        return process.env.API_BASE_URL || 'https://airportgap.com';
    },

    headless(): boolean {
        const raw = process.env.HEADLESS?.toLowerCase();
        return raw !== 'false';
    },

    // Timeouts in milliseconds used within helpers; Playwright config also sets defaults
    shortTimeout(): number {
        return Number(process.env.SHORT_TIMEOUT_MS || 3_000);
    },

    defaultTimeout(): number {
        return Number(process.env.DEFAULT_TIMEOUT_MS || 5_000);
    }
} as const;


