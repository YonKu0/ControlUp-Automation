import { Locator, Page } from '@playwright/test';

import { Urls } from '../config/urls';

export class InventoryPage {
    private readonly page: Page;
    private readonly itemCards: Locator;
    private readonly addToCartButtons: Locator;
    private readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.itemCards = page.getByTestId('inventory-item');
        this.addToCartButtons = page.getByRole('button', { name: /Add to cart/i });
        this.cartBadge = page.getByTestId('shopping-cart-badge');
    }

    async goto(): Promise<void> {
        await this.page.goto(Urls.ui.inventory);
    }

    async getItemCount(): Promise<number> {
        return await this.itemCards.count();
    }

    async addItemByIndex(index: number): Promise<void> {
        const button = this.addToCartButtons.nth(index);
        await button.click();
    }

    async cartCount(): Promise<number> {
        const isVisible = await this.cartBadge.isVisible();
        if (!isVisible) return 0;
        const text = await this.cartBadge.textContent();
        return Number(text || 0);
    }
}


