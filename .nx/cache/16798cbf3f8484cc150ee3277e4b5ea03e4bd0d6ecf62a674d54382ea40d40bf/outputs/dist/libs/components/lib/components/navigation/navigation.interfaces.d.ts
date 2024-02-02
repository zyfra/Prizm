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
export declare enum StatusDictionary {
    'info' = 0,
    'secondary' = 1,
    'success' = 2,
    'warning' = 3,
    'danger' = 4
}
