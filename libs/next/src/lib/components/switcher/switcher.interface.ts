export interface ISwitcher {
  title?: string | number;
  icon?: string;
  disabled?: boolean;
}

export type SwitcherSize = 'm' | 's' | 'l';

export type SwitcherType = 'inner' | 'outer';
