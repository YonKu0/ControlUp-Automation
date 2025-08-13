import { Locator, Page } from '@playwright/test';

import { Urls } from '../config/urls';

export class CartPage {
    private readonly page: Page;
    private readonly cartItems: Locator;
    private readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.getByTestId('inventory-item');
        this.cartBadge = page.getByTestId('shopping-cart-badge');
    }

    async goto(): Promise<void> {
        await this.page.goto(Urls.ui.cart);
    }

    async getCartItemCount(): Promise<number> {
        return await this.cartItems.count();
    }

    async getCartBadgeCount(): Promise<number> {
        const visible = await this.cartBadge.isVisible();
        if (!visible) return 0;
        const text = await this.cartBadge.textContent();
        return Number(text || 0);
    }
}


