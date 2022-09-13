export interface ITab {
  title?: string | number;
  icon?: string;
  count?: number;
  disabled?: boolean;
  closable?: boolean;
}

export type TabType = 'line' | 'contained';
export type TabSize = 's' | 'adaptive';
