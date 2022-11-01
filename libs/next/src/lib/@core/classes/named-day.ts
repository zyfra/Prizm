import { PzmDay } from '../date-time';

export class ZuiNamedDay {
    constructor(
        readonly day: PzmDay,
        private readonly name: string,
        readonly displayDay: PzmDay = day,
    ) {}

    public toString(): string {
        return this.name;
    }
}
