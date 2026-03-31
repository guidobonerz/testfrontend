export interface BaseModel {
  id: number;
  created_at: string;
  created_by: string;
  changed_at: string;
  changed_by: string;
  deleted: boolean;
  phantom: boolean;
  visible: boolean;
  active: boolean;
}
