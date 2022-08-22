import { ZuiDayRange } from '../date-time/day-range';

export class ZuiDayRangePeriod {
    constructor(readonly range: ZuiDayRange, private readonly name: string) {}

    public toString(): string {
        return this.name;
    }
}
