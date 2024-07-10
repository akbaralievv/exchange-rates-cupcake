export interface RateResponse {
  rates: {
    RUB: number;
    USD: number;
    EUR: number;
  };
  timestamp: number;
  base: string;
  date: string;
}

export interface Rate {
  pair: string;
  first: number;
  second: number;
  third: number;
}
