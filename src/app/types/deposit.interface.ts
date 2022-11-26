export interface Deposit {
  action: DepositReleaseActionTypes;
  amount: string;
  transaction_id: string;
  plan_id: string;
  image: string;
}

export enum DepositReleaseActionTypes {
  deposit = 'deposit',
  release = 'release',
}

export enum DepositPostResponseInterface {
  deposit = 'deposit',
  release = 'release',
}

export enum DepositPostRequestInterface {
  deposit = 'deposit',
  release = 'release',
}
