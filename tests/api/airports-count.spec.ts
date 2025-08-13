import { test, expect } from '../../src/fixtures/api.fixtures';

test.describe('@api Airports count', () => {
    test('GET /api/airports returns exactly 30 airports', async ({ airportClient }) => {
        const airports = await airportClient.listAirports();
        expect(airports.length).toBe(30);
    });
});


