import { PrizmDateMode } from '../../types';
import { PrizmWithOptionalMinMaxWithValue } from '../../types/with-optional-min-max';
import { PrizmDay } from '../date-time';
import { PZM_DATE_FILLER_LENGTH } from '../date-time/date-fillers';
import { PrizmTextMaskPipeHandler } from './text-mask-pipe-handler';

export interface PrizmAutoCorrectedDatePipeConfigs
    extends PrizmWithOptionalMinMaxWithValue<PrizmDay | null, PrizmDay> {
    dateFormat: PrizmDateMode;
    dateSeparator: string;
}

export function pzmNormalizeDateValue(
    dateValue: string,
    {value, min, max, dateFormat, dateSeparator}: PrizmAutoCorrectedDatePipeConfigs,
): string {
    return value && value.toString(dateFormat, dateSeparator) === dateValue
        ? dateValue
        : PrizmDay.normalizeParse(dateValue, dateFormat)
              .dayLimit(min, max)
              .toString(dateFormat, dateSeparator);
}

export function pzmCreateAutoCorrectedDatePipe(
    config: PrizmAutoCorrectedDatePipeConfigs,
): PrizmTextMaskPipeHandler {
    return (value: any): any => {
        if (value.length !== PZM_DATE_FILLER_LENGTH) {
            return {value};
        }

        return {
            value: pzmNormalizeDateValue(value, config),
        };
    };
}
