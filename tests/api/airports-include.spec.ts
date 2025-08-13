import { test, expect } from '../../src/fixtures/api.fixtures';
import { expectArrayToContainNames } from '../../src/utils/expectHelpers';
import { airports as data } from '../../src/utils/testData';

test.describe('@api Airports include', () => {
    test('GET /api/airports includes specific airports', async ({ airportClient }) => {
        const list = await airportClient.listAirports();
        const names = list.map((a) => a.name);
        expectArrayToContainNames(names, data.namesToInclude);
        expect(names.length).toBeGreaterThan(0);
    });
});


