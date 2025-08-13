// Central place for endpoint paths to keep them discoverable and consistent.
// UI: Sauce Demo docs: `https://www.saucedemo.com/`
// API: Airport Gap docs: `https://airportgap.com/#/api` and endpoints under `/api`.

export const Urls = {
    ui: {
        base: process.env.UI_BASE_URL || 'https://www.saucedemo.com',
        login: '/',
        inventory: '/inventory.html',
        cart: '/cart.html'
    },
    api: {
        base: process.env.API_BASE_URL || 'https://airportgap.com',
        listAirports: '/api/airports', // GET
        distance: '/api/airports/distance' // POST
    }
} as const;


