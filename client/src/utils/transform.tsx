import { Rate, RateResponse } from '../types';

export const transformRates = (
  dataFirst: RateResponse,
  dataSecond: RateResponse,
  dataThird: RateResponse,
): Rate[] => [
  {
    pair: 'RUB/CUPCAKE',
    first: parseFloat(dataFirst.rates.RUB.toFixed(2)),
    second: parseFloat(dataSecond.rates.RUB.toFixed(2)),
    third: parseFloat(dataThird.rates.RUB.toFixed(2)),
  },
  {
    pair: 'USD/CUPCAKE',
    first: parseFloat(dataFirst.rates.USD.toFixed(2)),
    second: parseFloat(dataSecond.rates.USD.toFixed(2)),
    third: parseFloat(dataThird.rates.USD.toFixed(2)),
  },
  {
    pair: 'EUR/CUPCAKE',
    first: parseFloat(dataFirst.rates.EUR.toFixed(2)),
    second: parseFloat(dataSecond.rates.EUR.toFixed(2)),
    third: parseFloat(dataThird.rates.EUR.toFixed(2)),
  },
  {
    pair: 'RUB/USD',
    first: parseFloat((dataFirst.rates.RUB / dataFirst.rates.USD).toFixed(2)),
    second: parseFloat((dataSecond.rates.RUB / dataSecond.rates.USD).toFixed(2)),
    third: parseFloat((dataThird.rates.RUB / dataThird.rates.USD).toFixed(2)),
  },
  {
    pair: 'RUB/EUR',
    first: parseFloat((dataFirst.rates.RUB / dataFirst.rates.EUR).toFixed(2)),
    second: parseFloat((dataSecond.rates.RUB / dataSecond.rates.EUR).toFixed(2)),
    third: parseFloat((dataThird.rates.RUB / dataThird.rates.EUR).toFixed(2)),
  },
  {
    pair: 'EUR/USD',
    first: parseFloat((dataFirst.rates.EUR / dataFirst.rates.USD).toFixed(2)),
    second: parseFloat((dataSecond.rates.EUR / dataSecond.rates.USD).toFixed(2)),
    third: parseFloat((dataThird.rates.EUR / dataThird.rates.USD).toFixed(2)),
  },
  {
    pair: 'EUR/RUB',
    first: parseFloat((1 / (dataFirst.rates.RUB / dataFirst.rates.EUR)).toFixed(2)),
    second: parseFloat((1 / (dataSecond.rates.RUB / dataSecond.rates.EUR)).toFixed(2)),
    third: parseFloat((1 / (dataThird.rates.RUB / dataThird.rates.EUR)).toFixed(2)),
  },
];
