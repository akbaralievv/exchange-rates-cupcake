import React from 'react';

import ExchangeRatesTable from './components/ExchangeRatesTable';
import useRates from './hooks/useRates';

const App: React.FC = () => {
  const rates = useRates();

  return (
    <div className="App">
      <h1>Exchange Rates</h1>
      <ExchangeRatesTable rates={rates} />
    </div>
  );
};

export default App;
