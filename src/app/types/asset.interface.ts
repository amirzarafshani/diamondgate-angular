import { PlanInterface } from './plan.interface';

export interface AssetInterface {
  status: string;
  amount: string;
  plan?: PlanInterface;
  staked_at: string;
  remaining: string;
  release_date: string;
  id: number;
  elapsed: string;
  calculated_profit: string;
  calculated_penalty: string;
  profit_rate: string;
}

export interface AssetsResponseInterface {
  items: AssetInterface[];
  total_items: number;
  total_pages: number;
}

export interface assetsChartDataInterface {
  labels: string[];
  amounts: number[];
  penalty: number[];
  profits: number[];
}
