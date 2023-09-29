export interface PrizmTableSettings {
  columns: PrizmColumnSettings[];
  stickyLeft: PrizmColumnSettings[];
  stickyRight: PrizmColumnSettings[];
  fixHeader?: boolean;
}

export interface PrizmColumnSettings {
  id: string;
  name: string;
  status: PrizmColumnStatus;
}

export type PrizmColumnStatus = 'sticky' | 'hidden' | 'default';
