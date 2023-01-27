import { PrizmDay } from '../date-time';

export class PrizmNamedDay {
  constructor(readonly day: PrizmDay, private readonly name: string, readonly displayDay: PrizmDay = day) {}

  public toString(): string {
    return this.name;
  }
}
