import { RateResponse } from '../types';

const API_URLS = [
  {
    initial: 'http://localhost:3000/api/v1/first',
    poll: 'http://localhost:3000/api/v1/first/poll',
  },
  {
    initial: 'http://localhost:3000/api/v1/second',
    poll: 'http://localhost:3000/api/v1/second/poll',
  },
  {
    initial: 'http://localhost:3000/api/v1/third',
    poll: 'http://localhost:3000/api/v1/third/poll',
  },
];

export const fetchInitialRates = async () => {
  const responses = await Promise.all(API_URLS.map((url) => fetch(url.initial)));
  const data = await Promise.all(responses.map((res) => res.json()));
  return data as RateResponse[];
};

export const fetchPollRates = async (): Promise<RateResponse[]> => {
  const responses = await Promise.all(API_URLS.map((url) => fetch(url.poll)));
  const data = await Promise.all(responses.map((res) => res.json()));
  return data as RateResponse[];
};
