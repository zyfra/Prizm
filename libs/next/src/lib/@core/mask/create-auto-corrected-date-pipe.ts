import { ZuiDateMode } from '../../types';
import { ZuiWithOptionalMinMaxWithValue } from '../../types/with-optional-min-max';
import { ZuiDay } from '../date-time';
import { ZUI_DATE_FILLER_LENGTH } from '../date-time/date-fillers';
import { ZuiTextMaskPipeHandler } from './text-mask-pipe-handler';

export interface ZuiAutoCorrectedDatePipeConfigs
    extends ZuiWithOptionalMinMaxWithValue<ZuiDay | null, ZuiDay> {
    dateFormat: ZuiDateMode;
    dateSeparator: string;
}

export function zuiNormalizeDateValue(
    dateValue: string,
    {value, min, max, dateFormat, dateSeparator}: ZuiAutoCorrectedDatePipeConfigs,
): string {
    return value && value.toString(dateFormat, dateSeparator) === dateValue
        ? dateValue
        : ZuiDay.normalizeParse(dateValue, dateFormat)
              .dayLimit(min, max)
              .toString(dateFormat, dateSeparator);
}

export function zuiCreateAutoCorrectedDatePipe(
    config: ZuiAutoCorrectedDatePipeConfigs,
): ZuiTextMaskPipeHandler {
    return (value: any): any => {
        if (value.length !== ZUI_DATE_FILLER_LENGTH) {
            return {value};
        }

        return {
            value: zuiNormalizeDateValue(value, config),
        };
    };
}
