// Airport Gap types
// Docs: `https://airportgap.com/#/api` and example responses under `/api` endpoints.

// Domain types used by tests/clients
export interface Airport {
    icao: string;
    iata: string | null;
    name: string;
    city: string;
    country: string;
    elevation: number | null;
    lat: number;
    lon: number;
    tz: string | null;
}

export interface DistanceRequest {
    from: string; // IATA or ICAO code
    to: string; // IATA or ICAO code
}

export interface DistanceResult {
    km: number;
    mi: number;
    nm: number;
}

// Raw API JSON:API response structures
export interface AirportsResponseResourceAttributes {
    name: string;
    city: string;
    country: string;
    iata: string | null;
    icao: string;
    latitude: string; // string numbers
    longitude: string;
    altitude: number | null;
    timezone: string | null;
}

export interface AirportsResponseResource {
    id: string; // IATA code
    type: 'airport';
    attributes: AirportsResponseResourceAttributes;
}

export interface AirportsResponse {
    data: AirportsResponseResource[];
}

export interface DistanceResponseDataAttributes {
    kilometers: number;
    miles: number;
    nautical_miles: number;
    from_airport: unknown;
    to_airport: unknown;
}

export interface DistanceResponseData {
    id: string;
    type: 'airport_distance';
    attributes: DistanceResponseDataAttributes;
}

export interface DistanceResponse {
    data: DistanceResponseData;
}


