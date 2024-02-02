import { PrizmDay } from './day';
export type PrizmDayWithStatusColor = 'index' | 'warning' | 'success' | 'danger' | string;
export declare class PrizmDayWithStatus extends PrizmDay {
    readonly status: PrizmDayWithStatusColor;
    constructor(year: number, month: number, day: number, status: PrizmDayWithStatusColor);
}
