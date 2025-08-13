import { test, expect } from '../../src/fixtures/ui.fixtures';

test.describe('@ui Cart interactions', () => {
    test('adding first item updates cart badge to 1', async ({ loginAsStandardUser, inventoryPage }) => {
        await loginAsStandardUser();
        await inventoryPage.goto();
        await inventoryPage.addItemByIndex(0);
        const badge = await inventoryPage.cartCount();
        expect(badge, 'Cart badge should be 1 after adding first item').toBe(1);
    });
});


