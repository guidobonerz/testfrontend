import { BaseModel } from './base.model';

export interface Vehicle extends BaseModel {
  name: string;
  color: string;
  brand_id: number;
  fuel_type: string;
  type: string;
  license_plate: string;
  pool: boolean;
}
