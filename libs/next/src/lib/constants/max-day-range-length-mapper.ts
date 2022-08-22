import { ZuiDay, ZuiDayRange } from '../@core/date-time';
import { ZuiDayLike } from '../types/day-like';
import { ZuiMapper } from '../types/mapper';

export const ZUI_MAX_DAY_RANGE_LENGTH_MAPPER: ZuiMapper<ZuiDay, ZuiDay> = (
    min,
    value: ZuiDayRange,
    maxLength: ZuiDayLike | null,
    backwards: boolean,
) => {
    if (!value || !value.isSingleDay || !maxLength) {
        return min;
    }

    const dateShift = value.from
        .append(maxLength, backwards)
        .append({day: 1}, !backwards);

    if (backwards) {
        return dateShift.dayBefore(min) ? min : dateShift;
    }

    if (!min) {
        return dateShift;
    }

    return dateShift.dayAfter(min) ? min : dateShift;
};
