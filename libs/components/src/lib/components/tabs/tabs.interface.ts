import { PrizmCounterStatus } from '../counter';

/**
 * @deprecated
 * */
export interface PrizmTabItem {
  title?: string | number;
  icon?: string;
  count?: number;
  counterOptions?: Partial<PrizmTabCounterOptions>;
  disabled?: boolean;
  closable?: boolean;
}

export type PrizmTabType = 'line' | 'contained';

export type PrizmTabSize = 's' | 'adaptive';

export type PrizmTabCounterOptions = { status: PrizmCounterStatus; disabled: boolean; maxValue?: number };
