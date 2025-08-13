import { expect } from '@playwright/test';

export function expectArrayToContainNames(
    actualNames: ReadonlyArray<string>,
    expectedNames: ReadonlyArray<string>,
): void {
    for (const expected of expectedNames) {
        expect(actualNames, `Expected to include name: ${expected}`).toContain(expected);
    }
}


