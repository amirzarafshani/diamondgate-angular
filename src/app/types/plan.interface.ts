export interface PlanInterface {
  id: number;
  name: string;
  days: string;
  profit: string;
  penalty: string;
}

export interface PlansResponseInterface extends PlanInterface {}
