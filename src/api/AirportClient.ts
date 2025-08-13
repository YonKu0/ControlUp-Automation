import { APIRequestContext, expect, request } from '@playwright/test';

import {
    Airport,
    AirportsResponse,
    DistanceRequest,
    DistanceResponse,
    DistanceResult,
    AirportsResponseResource,
} from './types';
import { Urls } from '../config/urls';

// Airport Gap docs: `https://airportgap.com/#/api`
// Endpoints:
// - GET `/api/airports` returns a list of airports
// - POST `/api/airports/distance` with JSON { from, to }

export class AirportClient {
    private readonly ctx: APIRequestContext;

    private constructor(ctx: APIRequestContext) {
        this.ctx = ctx;
    }

    static async create(): Promise<AirportClient> {
        const ctx = await request.newContext({ baseURL: Urls.api.base });
        return new AirportClient(ctx);
    }

    async dispose(): Promise<void> {
        await this.ctx.dispose();
    }

    async listAirports(): Promise<Airport[]> {
        const res = await this.ctx.get(Urls.api.listAirports);
        expect(res.ok(), 'GET /api/airports should succeed').toBeTruthy();
        const json = (await res.json()) as AirportsResponse;
        this.assertAirportsResponse(json);
        return json.data.map(this.mapAirportResourceToAirport);
    }

    async distanceBetween(from: string, to: string): Promise<DistanceResult> {
        const body: DistanceRequest = { from, to };
        const res = await this.ctx.post(Urls.api.distance, { data: body });
        expect(res.ok(), 'POST /api/airports/distance should succeed').toBeTruthy();
        const json = (await res.json()) as DistanceResponse;
        this.assertDistanceResponse(json);
        return {
            km: json.data.attributes.kilometers,
            mi: json.data.attributes.miles,
            nm: json.data.attributes.nautical_miles,
        };
    }

    private assertAirportsResponse(payload: unknown): asserts payload is AirportsResponse {
        if (
            typeof payload !== 'object' ||
            payload === null ||
            !Array.isArray((payload as AirportsResponse).data)
        ) {
            throw new Error('Invalid AirportsResponse schema');
        }
    }

    private assertDistanceResponse(payload: unknown): asserts payload is DistanceResponse {
        if (
            typeof payload !== 'object' ||
            payload === null ||
            typeof (payload as DistanceResponse).data !== 'object' ||
            (payload as DistanceResponse).data === null
        ) {
            throw new Error('Invalid DistanceResponse schema');
        }
    }

    private mapAirportResourceToAirport(resource: AirportsResponseResource): Airport {
        const a = resource.attributes;
        return {
            icao: a.icao,
            iata: a.iata,
            name: a.name,
            city: a.city,
            country: a.country,
            elevation: a.altitude,
            lat: Number(a.latitude),
            lon: Number(a.longitude),
            tz: a.timezone,
        };
    }
}


