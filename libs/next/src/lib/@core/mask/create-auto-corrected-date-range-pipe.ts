import { ZuiDateMode } from '../../types/date-mode';
import { ZuiWithOptionalMinMaxWithValue } from '../../types/with-optional-min-max';
import { ZUI_DATE_FILLER_LENGTH, ZUI_DATE_RANGE_FILLER_LENGTH } from '../date-time/date-fillers';
import { ZUI_RANGE_SEPARATOR_CHAR } from '../date-time/date-time';
import { ZuiDay } from '../date-time/day';
import { ZuiDayRange } from '../date-time/day-range';
import { ZuiTextMaskPipeHandler } from './text-mask-pipe-handler';

interface ZuiAutoCorrectedDatePipeConfigs
    extends ZuiWithOptionalMinMaxWithValue<ZuiDayRange | null, ZuiDay> {
    dateFormat: ZuiDateMode;
    dateSeparator: string;
}

function parseWithLimit(value: string, config: ZuiAutoCorrectedDatePipeConfigs): ZuiDay {
    return ZuiDay.normalizeParse(
        value.slice(0, ZUI_DATE_FILLER_LENGTH),
        config.dateFormat,
    ).dayLimit(config.min, config.max);
}

function processRawValue(value: string, config: ZuiAutoCorrectedDatePipeConfigs): string {
    const {dateFormat, dateSeparator} = config;

    switch (value.length) {
        case ZUI_DATE_FILLER_LENGTH:
            return parseWithLimit(value, config).toString(dateFormat, dateSeparator);
        case ZUI_DATE_FILLER_LENGTH + ZUI_RANGE_SEPARATOR_CHAR.length:
            return (
                parseWithLimit(value, config).toString(dateFormat, dateSeparator) +
                ZUI_RANGE_SEPARATOR_CHAR
            );
        case ZUI_DATE_RANGE_FILLER_LENGTH:
            return config.value &&
                config.value.toString(dateFormat, dateSeparator) === value
                ? value
                : ZuiDayRange.sort(
                      parseWithLimit(value.slice(0, ZUI_DATE_FILLER_LENGTH), config),
                      parseWithLimit(
                          value.slice(ZUI_DATE_FILLER_LENGTH + ZUI_RANGE_SEPARATOR_CHAR.length),
                          config,
                      ),
                  ).toString(dateFormat, dateSeparator);
        default:
            return value;
    }
}

/**
 * Normalizes date in formatted string
 *
 * Normalizes when:
 *
 * 1. It is a single date
 * 2. It is a single date and a separator
 * 3. It is two dates and a separator between them
 *
 * In **other** cases, the value does not change.
 *
 * @param config with min and max date
 * @return mask pipe handler that handles `min` and `max`
 */
export function zuiCreateAutoCorrectedDateRangePipe(
    config: ZuiAutoCorrectedDatePipeConfigs,
): ZuiTextMaskPipeHandler {
    return (value: any): any => ({value: processRawValue(value, config)});
}
