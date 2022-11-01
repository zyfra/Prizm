import { PzmDateMode } from '../../types';
import { PzmWithOptionalMinMaxWithValue } from '../../types/with-optional-min-max';
import { PzmDay } from '../date-time';
import { PZM_DATE_FILLER_LENGTH } from '../date-time/date-fillers';
import { PzmTextMaskPipeHandler } from './text-mask-pipe-handler';

export interface PzmAutoCorrectedDatePipeConfigs
    extends PzmWithOptionalMinMaxWithValue<PzmDay | null, PzmDay> {
    dateFormat: PzmDateMode;
    dateSeparator: string;
}

export function pzmNormalizeDateValue(
    dateValue: string,
    {value, min, max, dateFormat, dateSeparator}: PzmAutoCorrectedDatePipeConfigs,
): string {
    return value && value.toString(dateFormat, dateSeparator) === dateValue
        ? dateValue
        : PzmDay.normalizeParse(dateValue, dateFormat)
              .dayLimit(min, max)
              .toString(dateFormat, dateSeparator);
}

export function pzmCreateAutoCorrectedDatePipe(
    config: PzmAutoCorrectedDatePipeConfigs,
): PzmTextMaskPipeHandler {
    return (value: any): any => {
        if (value.length !== PZM_DATE_FILLER_LENGTH) {
            return {value};
        }

        return {
            value: pzmNormalizeDateValue(value, config),
        };
    };
}
