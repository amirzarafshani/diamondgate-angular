import { PlanInterface } from './plan.interface';

export interface ReleaseInterface {
  id: number;
  amount: string | null;
  current_amount: string | null;
  penalty: string | null;
  profit: string | null;
  status: 'pending';
  asset_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  protocol: string | null;
  address: string;
  remaining: number;
  elapsed: number;
  transaction_id: string | null;
  total_amount: number;
  plan: PlanInterface;
  user: any;
}

export interface ReleasesResponseInterface {
  items: ReleaseInterface[];
  total_items: number;
  total_pages: number;
}

export interface ReleasePostRequestInterface {
  address: string;
  asset_id: number;
}
