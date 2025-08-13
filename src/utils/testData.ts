export const users = {
    standard: {
        username: 'standard_user',
        password: 'secret_sauce'
    }
} as const;

export const airports = {
    namesToInclude: ['Akureyri Airport', 'St. Anthony Airport', 'CFB Bagotville'],
    distancePairs: { from: 'KIX', to: 'NRT', minKm: 400 }
} as const;


