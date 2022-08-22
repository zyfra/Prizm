import { ZuiTimeMode } from '../../types/time-mode';
import { ZUI_DATE_FILLER_LENGTH } from '../date-time/date-fillers';
import { ZuiAutoCorrectedDatePipeConfigs, zuiNormalizeDateValue } from './create-auto-corrected-date-pipe';
import { zuiCreateAutoCorrectedTimePipe } from './create-auto-corrected-time-pipe';
import { ZuiTextMaskPipeHandler } from './text-mask-pipe-handler';
import { ZuiTextMaskOptions } from './text-mask-options';
import { ZuiTextMaskConfig } from './text-mask-config';
import { ZUI_DATE_TIME_SEPARATOR } from '../../constants/date-time-separator';
import { ZuiTextMaskPipeResult } from './text-mask-pipe-result';

interface ZuiAutoCorrectedDateTimePipeConfigs extends ZuiAutoCorrectedDatePipeConfigs {
    timeMode: ZuiTimeMode;
}

export function zuiCreateAutoCorrectedDateTimePipe(
    configs: ZuiAutoCorrectedDateTimePipeConfigs,
): ZuiTextMaskPipeHandler {
    const timePipe = zuiCreateAutoCorrectedTimePipe(configs.timeMode);

    return (value: string): string | ZuiTextMaskPipeResult | false => {
        if (value.length < ZUI_DATE_FILLER_LENGTH) {
            return {value};
        }

        const [date, time] = value.split(ZUI_DATE_TIME_SEPARATOR);

        const formattedDate = zuiNormalizeDateValue(date, configs);

        if (!time) {
            return {value: formattedDate};
        }

        const pipedTime = timePipe(
            time,
            {} as unknown as ZuiTextMaskOptions & ZuiTextMaskConfig,
        );

        if (!pipedTime || typeof pipedTime === `string`) {
            return false;
        }

        return {
            value: `${formattedDate}${ZUI_DATE_TIME_SEPARATOR}${pipedTime.value}`,
            indexesOfPipedChars: pipedTime.indexesOfPipedChars
                ? pipedTime.indexesOfPipedChars.map((i: number) => i + date.length + 2)
                : undefined,
        };
    };
}
