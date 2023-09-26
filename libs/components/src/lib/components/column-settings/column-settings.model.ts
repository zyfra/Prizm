export interface PrizmColumnSettings {
  id: string;
  name: string;
  status: PrizmColumnStatus;
}

export type PrizmColumnStatus = 'sticky' | 'hidden' | 'default';
