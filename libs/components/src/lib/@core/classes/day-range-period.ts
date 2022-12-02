import { PrizmDayRange } from '../date-time/day-range';

export class PrizmDayRangePeriod {
    constructor(readonly range: PrizmDayRange, private readonly name: string) {}

    public toString(): string {
        return this.name;
    }
}
