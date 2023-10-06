import { PolymorphComponent, PolymorphContent } from '../../directives';

export interface PrizmTableSettings {
  columns: PrizmColumnSettings[];
  stickyLeft: PrizmColumnSettings[];
  stickyRight: PrizmColumnSettings[];
  fixHeader?: boolean;
}

export interface PrizmColumnSettingsBase {
  id: string;
  name: string;
  status: PrizmColumnStatus;
}

export type PrizmColumnSettings = PrizmColumnSettingsBase | PrizmColumnSettingsPolymorph;

export interface PrizmColumnSettingsPolymorph {
  id: string;
  template: PolymorphContent<PrizmColumnSettingsPolymorph>;
  status: PrizmColumnStatus;
  context?: {
    [key: string]: unknown;
  };
}

export type PrizmColumnStatus = 'sticky' | 'hidden' | 'default';
