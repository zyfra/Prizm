import { PrizmTimeMode } from '../../types/time-mode';
import { PrizmTime } from './time';
/**
 * Immutable time object with hours, minutes, seconds and ms
 */
export declare class PrizmTimeRange {
    from: PrizmTime;
    to: PrizmTime;
    constructor(from: PrizmTime, to: PrizmTime);
    toString(timeMode: PrizmTimeMode, timeSeparator?: string): string;
}
