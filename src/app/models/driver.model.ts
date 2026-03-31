import { BaseModel } from './base.model';

export interface Driver extends BaseModel {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  license_number: string;
  vehicle_ids: number[];
}
