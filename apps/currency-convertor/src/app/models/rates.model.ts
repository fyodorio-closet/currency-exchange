export interface RatesSet {
  base: string;
  date: string;
  rates: any
}

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
