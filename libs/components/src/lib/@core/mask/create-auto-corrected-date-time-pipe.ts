import { PrizmTimeMode } from '../../types/time-mode';
import { PRIZM_DATE_FILLER_LENGTH } from '../date-time/date-fillers';
import {
  PrizmAutoCorrectedDatePipeConfigs,
  prizmNormalizeDateValue,
} from './create-auto-corrected-date-pipe';
import { prizmCreateAutoCorrectedTimePipe } from './create-auto-corrected-time-pipe';
import { PrizmTextMaskPipeHandler } from './text-mask-pipe-handler';
import { PrizmTextMaskOptions } from './text-mask-options';
import { PrizmTextMaskConfig } from './text-mask-config';
import { PRIZM_DATE_TIME_SEPARATOR } from '../../constants/date-time-separator';
import { PrizmTextMaskPipeResult } from './text-mask-pipe-result';

interface PrizmAutoCorrectedDateTimePipeConfigs extends PrizmAutoCorrectedDatePipeConfigs {
  timeMode: PrizmTimeMode;
}

export function prizmCreateAutoCorrectedDateTimePipe(
  configs: PrizmAutoCorrectedDateTimePipeConfigs
): PrizmTextMaskPipeHandler {
  const timePipe = prizmCreateAutoCorrectedTimePipe(configs.timeMode);

  return (value: string): string | PrizmTextMaskPipeResult | false => {
    if (value.length < PRIZM_DATE_FILLER_LENGTH) {
      return { value };
    }

    const [date, time] = value.split(PRIZM_DATE_TIME_SEPARATOR);

    const formattedDate = prizmNormalizeDateValue(date, configs);

    if (!time) {
      return { value: formattedDate };
    }

    const pipedTime = timePipe(time, {} as unknown as PrizmTextMaskOptions & PrizmTextMaskConfig);

    if (!pipedTime || typeof pipedTime === `string`) {
      return false;
    }

    return {
      value: `${formattedDate}${PRIZM_DATE_TIME_SEPARATOR}${pipedTime.value}`,
      indexesOfPipedChars: pipedTime.indexesOfPipedChars
        ? pipedTime.indexesOfPipedChars.map((i: number) => i + date.length + 2)
        : undefined,
    };
  };
}
