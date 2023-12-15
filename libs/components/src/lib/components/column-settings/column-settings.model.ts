import { PolymorphContent } from '../../directives';

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
export interface PrizmColumnSettingsContext {
  column: PrizmColumnSettings;
  isLastColumnShown: boolean;
  toggleColumnStatus(column: PrizmColumnSettings): void;
}
export interface PrizmColumnSettings {
  template?: PolymorphContent<PrizmColumnSettingsContext | any>;
}

export type PrizmColumnStatus = 'sticky' | 'hidden' | 'default';
