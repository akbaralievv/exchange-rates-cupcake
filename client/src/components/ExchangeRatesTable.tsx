import React from 'react';

import { Rate } from '../types';

interface ExchangeRatesTableProps {
  rates: Rate[];
}

const ExchangeRatesTable: React.FC<ExchangeRatesTableProps> = ({ rates }) => {
  return (
    <table className="exchange-rates-table">
      <thead>
        <tr>
          <th>Pair name/market</th>
          <th>First</th>
          <th>Second</th>
          <th>Third</th>
        </tr>
      </thead>
      <tbody>
        {rates.map((rate) => (
          <tr key={rate.pair}>
            <td>{rate.pair}</td>
            <td
              className={
                rate.first === Math.min(rate.first, rate.second, rate.third) ? 'highlight' : ''
              }>
              {rate.first}
            </td>
            <td
              className={
                rate.second === Math.min(rate.first, rate.second, rate.third) ? 'highlight' : ''
              }>
              {rate.second}
            </td>
            <td
              className={
                rate.third === Math.min(rate.first, rate.second, rate.third) ? 'highlight' : ''
              }>
              {rate.third}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExchangeRatesTable;
