import { PrizmDayRange } from './day-range';
import { PrizmDateMode, PrizmTimeMode } from '../../types';
import { PrizmTimeRange } from './time-range';
import { PrizmTime } from './time';
export declare class PrizmDateTimeRange {
    dayRange: PrizmDayRange;
    timeRange: PrizmTimeRange | null;
    constructor(dayRange: PrizmDayRange, timeRange?: PrizmTimeRange | null);
    static safeUpdateTimeFrom(origin: PrizmDateTimeRange | null, time: PrizmTime): PrizmDateTimeRange;
    static safeUpdateTimeTo(origin: PrizmDateTimeRange | null, time: PrizmTime): PrizmDateTimeRange;
    static createIfNotExist(origin: PrizmDateTimeRange | null): PrizmDateTimeRange;
    copy(): PrizmDateTimeRange;
    toString(dateFormat?: PrizmDateMode, timeFormat?: PrizmTimeMode, dateSeparator?: string): string;
    updateDayRange(dayRange: PrizmDayRange): void;
}
