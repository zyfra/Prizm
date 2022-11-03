import { PrizmTimeMode } from '../../types/time-mode';
import { PZM_DATE_FILLER_LENGTH } from '../date-time/date-fillers';
import { PrizmAutoCorrectedDatePipeConfigs, pzmNormalizeDateValue } from './create-auto-corrected-date-pipe';
import { pzmCreateAutoCorrectedTimePipe } from './create-auto-corrected-time-pipe';
import { PrizmTextMaskPipeHandler } from './text-mask-pipe-handler';
import { PrizmTextMaskOptions } from './text-mask-options';
import { PrizmTextMaskConfig } from './text-mask-config';
import { PZM_DATE_TIME_SEPARATOR } from '../../constants/date-time-separator';
import { PrizmTextMaskPipeResult } from './text-mask-pipe-result';

interface PrizmAutoCorrectedDateTimePipeConfigs extends PrizmAutoCorrectedDatePipeConfigs {
    timeMode: PrizmTimeMode;
}

export function pzmCreateAutoCorrectedDateTimePipe(
    configs: PrizmAutoCorrectedDateTimePipeConfigs,
): PrizmTextMaskPipeHandler {
    const timePipe = pzmCreateAutoCorrectedTimePipe(configs.timeMode);

    return (value: string): string | PrizmTextMaskPipeResult | false => {
        if (value.length < PZM_DATE_FILLER_LENGTH) {
            return {value};
        }

        const [date, time] = value.split(PZM_DATE_TIME_SEPARATOR);

        const formattedDate = pzmNormalizeDateValue(date, configs);

        if (!time) {
            return {value: formattedDate};
        }

        const pipedTime = timePipe(
            time,
            {} as unknown as PrizmTextMaskOptions & PrizmTextMaskConfig,
        );

        if (!pipedTime || typeof pipedTime === `string`) {
            return false;
        }

        return {
            value: `${formattedDate}${PZM_DATE_TIME_SEPARATOR}${pipedTime.value}`,
            indexesOfPipedChars: pipedTime.indexesOfPipedChars
                ? pipedTime.indexesOfPipedChars.map((i: number) => i + date.length + 2)
                : undefined,
        };
    };
}
