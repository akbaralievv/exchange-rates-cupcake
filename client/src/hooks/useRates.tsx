import { useState, useEffect } from 'react';

import { fetchInitialRates, fetchPollRates } from '../api';
import { transformRates } from '../utils/transform';
import { Rate } from '../types';

const useRates = () => {
  const [rates, setRates] = useState<Rate[]>([]);

  useEffect(() => {
    const loadInitialRates = async () => {
      const initialRates = await fetchInitialRates();
      const [dataFirst, dataSecond, dataThird] = initialRates;
      setRates(transformRates(dataFirst, dataSecond, dataThird));
    };

    const pollRates = async () => {
      const pollData = await fetchPollRates();
      const [dataFirst, dataSecond, dataThird] = pollData;
      setRates(transformRates(dataFirst, dataSecond, dataThird));
      setTimeout(pollRates, 1000);
    };

    loadInitialRates().then(pollRates);
  }, []);

  return rates;
};

export default useRates;
