import { filter, from, groupBy, GroupedObservable, map, mergeMap, Observable, reduce } from 'rxjs';

import { exchangeRates, MonthlySummary, Transaction } from './model/request';

const transactions: Partial<Transaction>[] = [
	{ id: 'SOME', amount: 234, date: '2025-12-12' },
	{ id: '1', amount: 100, currency: 'EUR', date: '2025-01-15', status: 'completed' },
	{ id: '2', amount: 200, currency: 'USD', date: '2025-01-22', status: 'failed' },
	{ id: '3', amount: 300, currency: 'GBP', date: '2025-02-10', status: 'completed' },
	{ id: '3', amount: 150, currency: 'EUR', date: '2025-02-05', status: 'completed' }
];

const processOngroup = (obs$: GroupedObservable<string, Partial<Transaction>>): Observable<MonthlySummary> => {
	return obs$.pipe(
		reduce(
			(acc, value) => {
				const currency = value.currency || 'Unknow';
				acc.month = acc.month || obs$.key;
				acc.totals[currency] ??= {
					originalTotal: 0,
					convertedTotalUSD: 0
				};
				acc.totals[currency].originalTotal += value.amount || 0;
				acc.totals[currency].convertedTotalUSD = exchangeRates[currency] * acc.totals[currency].originalTotal;
				return acc;
			},
			{ month: '', totals: {} } as MonthlySummary
		)
	);
};

from(transactions)
	.pipe(
		filter(transaction => transaction.status === 'completed'),
		filter(trx => trx.date != undefined),
		filter(trx => trx.date != null),
		map(trx => {
			return { ...trx, date: trx.date?.slice(0, 7) || '' };
		}),
		groupBy(trx => trx.date),
		mergeMap(groupTrx => processOngroup(groupTrx))
	)
	.subscribe(console.log);