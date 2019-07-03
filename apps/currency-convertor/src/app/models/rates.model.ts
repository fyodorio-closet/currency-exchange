import { RatesSet } from './rates-set.model';

export interface RatesState {
  ratesSet: RatesSet;
}

export interface TableDataItem {
  code: string;
  value: number;
}

export interface CurrencyTable {
  displayedColumns: string[];
  dataSource: TableDataItem[];
}
