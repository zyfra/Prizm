import { PzmTimeMode } from '../../types/time-mode';
import { PZM_DATE_FILLER_LENGTH } from '../date-time/date-fillers';
import { PzmAutoCorrectedDatePipeConfigs, pzmNormalizeDateValue } from './create-auto-corrected-date-pipe';
import { pzmCreateAutoCorrectedTimePipe } from './create-auto-corrected-time-pipe';
import { PzmTextMaskPipeHandler } from './text-mask-pipe-handler';
import { PzmTextMaskOptions } from './text-mask-options';
import { PzmTextMaskConfig } from './text-mask-config';
import { PZM_DATE_TIME_SEPARATOR } from '../../constants/date-time-separator';
import { PzmTextMaskPipeResult } from './text-mask-pipe-result';

interface PzmAutoCorrectedDateTimePipeConfigs extends PzmAutoCorrectedDatePipeConfigs {
    timeMode: PzmTimeMode;
}

export function pzmCreateAutoCorrectedDateTimePipe(
    configs: PzmAutoCorrectedDateTimePipeConfigs,
): PzmTextMaskPipeHandler {
    const timePipe = pzmCreateAutoCorrectedTimePipe(configs.timeMode);

    return (value: string): string | PzmTextMaskPipeResult | false => {
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
            {} as unknown as PzmTextMaskOptions & PzmTextMaskConfig,
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
