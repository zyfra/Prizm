import { PrizmDayRange } from '../date-time/day-range';
export declare class PrizmDayRangePeriod {
    readonly range: PrizmDayRange;
    private readonly name;
    constructor(range: PrizmDayRange, name: string);
    toString(): string;
}
