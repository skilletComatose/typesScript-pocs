export type Currency = 'USD' | 'EUR' | 'GBP';

export type Status =
    'pending' |
    'completed' |
    'failed';

export type Transaction = {
    id: string;
    amount: number;
    currency: Currency;
    date: string; // ISO string
    status: Status;
};

export const exchangeRates = {
    EUR: 1.1, // 1 EUR = 1.1 USD
    GBP: 1.3,
    USD: 1,
    Unknow : 1
};

export type totalAmounts = {

    originalTotal: number;
    convertedTotalUSD: number;

}
export type MonthlySummary = {
    month: string; // e.g., '2025-01'
    totals: {
        [currency: string]: totalAmounts ;
    };
};