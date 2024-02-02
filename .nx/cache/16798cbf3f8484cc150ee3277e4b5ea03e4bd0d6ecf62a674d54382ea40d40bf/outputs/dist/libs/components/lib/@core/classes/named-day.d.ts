import { PrizmDay } from '../date-time';
export declare class PrizmNamedDay {
    readonly day: PrizmDay;
    private readonly name;
    readonly displayDay: PrizmDay;
    constructor(day: PrizmDay, name: string, displayDay?: PrizmDay);
    toString(): string;
}
