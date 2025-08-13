import { test as base } from '@playwright/test';

import { AirportClient } from '../api/AirportClient';

type ApiFixtures = {
    airportClient: AirportClient;
};

export const test = base.extend<ApiFixtures>({
    airportClient: async ({ }, use) => {
        const client = await AirportClient.create();
        await use(client);
        await client.dispose();
    }
});

export { expect } from '@playwright/test';


