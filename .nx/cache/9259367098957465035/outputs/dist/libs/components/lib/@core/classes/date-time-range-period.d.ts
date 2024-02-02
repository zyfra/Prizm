import { PrizmDateTimeRange } from '../date-time/day-time-range';
export declare class PrizmDateTimeRangePeriod {
    readonly range: PrizmDateTimeRange;
    private readonly name;
    constructor(range: PrizmDateTimeRange, name: string);
    toString(): string;
}
