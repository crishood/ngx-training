export interface LicensePlate {
  _id: LicensePlateId;
  onSale: boolean;
  picture: string;
  title: string;
  price: number;
  year: number;
  state: string;
  description: string;
}

export type LicensePlateId = string;

type FilteringCriteria<T> = Partial<T>

const filter: FilteringCriteria<LicensePlate> = {year: 2000};

type Currency = "USD" | "GBP" | "EUR" | "CAD";

type ExchangeRates = Record<Currency, number>;

const rates: ExchangeRates= {
  GBP: 2,
  CAD: 1.5,
  EUR: 1.3,
  USD: 1
}
