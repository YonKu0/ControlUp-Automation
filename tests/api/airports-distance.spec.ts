import { test, expect } from '../../src/fixtures/api.fixtures';
import { airports as data } from '../../src/utils/testData';

test.describe('@api Airports distance', () => {
    test('POST /api/airports/distance KIX-NRT distance > 400km', async ({ airportClient }) => {
        const result = await airportClient.distanceBetween(data.distancePairs.from, data.distancePairs.to);
        expect(result.km).toBeGreaterThan(data.distancePairs.minKm);
    });
});


