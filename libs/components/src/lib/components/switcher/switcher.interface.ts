export interface PrizmSwitcherItem<ID extends PrizmSwitcherId = PrizmSwitcherId> {
  title?: string | number;
  icon?: string;
  disabled?: boolean;
  hide?: boolean;
  id?: ID;
}

export type PrizmSwitcherSize = 'm' | 's' | 'l';

export type PrizmSwitcherType = 'inner' | 'outer';
export type PrizmSwitcherId = number | string;
