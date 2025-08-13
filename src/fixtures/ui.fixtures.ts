import { test as base, Page } from '@playwright/test';

import { CartPage } from '../pages/CartPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

type UiFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    loginAsStandardUser: () => Promise<void>;
};

export const test = base.extend<UiFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    loginAsStandardUser: async ({ page }, use) => {
        const login = async (): Promise<void> => {
            const loginPage = new LoginPage(page as Page);
            await loginPage.loginAsStandardUser();
        };
        await use(login);
    }
});

export { expect } from '@playwright/test';


