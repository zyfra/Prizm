import { PzmDayRange } from '../date-time/day-range';

export class PzmDayRangePeriod {
    constructor(readonly range: PzmDayRange, private readonly name: string) {}

    public toString(): string {
        return this.name;
    }
}
