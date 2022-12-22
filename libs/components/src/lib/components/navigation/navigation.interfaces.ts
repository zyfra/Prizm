import { IndicatorStatus } from '../indicator';

export interface IScreen {
  title: string;
  icon?: string;
}

export interface INavigationTree extends IScreen {
  isExpanded?: boolean;
  children?: INavigationTree[];
  indicatorStatus?: IndicatorStatus;
  indicatorValue?: number;
}

export enum StatusDictionary {
  'info',
  'secondary',
  'success',
  'warning',
  'danger',
}
