import { test, expect } from '../../src/fixtures/ui.fixtures';

test.describe('@ui Inventory page', () => {
    test('shows exactly 6 items', async ({ loginAsStandardUser, inventoryPage }) => {
        await loginAsStandardUser();
        await inventoryPage.goto();
        const count = await inventoryPage.getItemCount();
        expect(count, 'Inventory item count should be 6').toBe(6);
    });
});


