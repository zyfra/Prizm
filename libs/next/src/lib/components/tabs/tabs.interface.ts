export interface ITab {
  title?: string | number;
  icon?: string;
  count?: number;
  disabled?: boolean;
}

export type TabType = 'line' | 'contained';
export type TabSize = 'm' | 's' | 'adaptive';
