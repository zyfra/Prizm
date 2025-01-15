import { PrizmTimeMode } from '../../types/time-mode';
import { PrizmTime } from './time';

/**
 * Immutable time object with hours, minutes, seconds and ms
 */
export class PrizmTimeRange {
  constructor(
    public from: PrizmTime,
    public to: PrizmTime
  ) {}

  public toString(timeMode: PrizmTimeMode, timeSeparator = ' - '): string {
    return `${this.from.toString(timeMode)}${timeSeparator}${this.to.toString(timeMode)}`;
  }
}
