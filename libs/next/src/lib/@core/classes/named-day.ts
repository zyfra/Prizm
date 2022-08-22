import { ZuiDay } from '../date-time';

export class ZuiNamedDay {
    constructor(
        readonly day: ZuiDay,
        private readonly name: string,
        readonly displayDay: ZuiDay = day,
    ) {}

    public toString(): string {
        return this.name;
    }
}
