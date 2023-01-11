/**
 * @deprecated
 * */
export interface PrizmTabItem {
  title?: string | number;
  icon?: string;
  count?: number;
  disabled?: boolean;
  closable?: boolean;
}

export type PrizmTabType = 'line' | 'contained';

export type PrizmTabSize = 's' | 'adaptive';
