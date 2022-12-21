import { PrizmDateTimeRange } from "../date-time/day-time-range";

export class PrizmDateTimeRangePeriod {
    constructor(readonly range: PrizmDateTimeRange, private readonly name: string) {}

    public toString(): string {
        return this.name;
    }
}
