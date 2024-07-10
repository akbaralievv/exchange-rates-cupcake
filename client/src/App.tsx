import React from 'react';

import ExchangeRatesTable from './components/ExchangeRatesTable';
import useRates from './hooks/useRates';

import cupcakeLogo from './assets/cupcake_logo.png';

const App: React.FC = () => {
  const rates = useRates();

  return (
    <div className="App">
      <div className="title">
        <img src={cupcakeLogo} alt="logo" />
        <h1>Exchange Rates</h1>
      </div>
      <ExchangeRatesTable rates={rates} />
    </div>
  );
};

export default App;
