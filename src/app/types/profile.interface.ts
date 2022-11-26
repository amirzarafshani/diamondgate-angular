export interface ProfileInterface {
  amounts: string[];
  labels: string[];
  penalty: string[];
  profits: string[];
  referral_code: string;
  referral_count: number;
  registered_date: string;
}

export interface ProfilesResponseInterface extends ProfileInterface {}
