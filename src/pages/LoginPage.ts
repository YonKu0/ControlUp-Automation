import { Locator, Page, expect } from '@playwright/test';

import { Urls } from '../config/urls';
import { users } from '../utils/testData';

export class LoginPage {
    private readonly page: Page;
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;
    private readonly errorBanner: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByTestId('username');
        this.password = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-button');
        this.errorBanner = page.getByTestId('error');
    }

    async goto(): Promise<void> {
        await this.page.goto(Urls.ui.login);
        await expect(this.username).toBeVisible();
    }

    async login(username: string, password: string): Promise<void> {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async loginAsStandardUser(): Promise<void> {
        await this.goto();
        await this.login(users.standard.username, users.standard.password);
        await expect(this.page).toHaveURL(/inventory\.html/);
    }
}


