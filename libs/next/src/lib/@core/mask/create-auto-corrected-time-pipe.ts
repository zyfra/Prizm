import { PZM_MAX_TIME_VALUES } from '../../constants/max-time-values';
import { PzmTimeFormatParts } from '../../types/time-format-parts';
import { PzmTimeMode } from '../../types/time-mode';
import { PzmTextMaskPipeHandler } from './text-mask-pipe-handler';
import { PzmTextMaskPipeResult } from './text-mask-pipe-result';


export function pzmCreateAutoCorrectedTimePipe(
    timeMode: PzmTimeMode = `HH:MM`,
    maxValues: Partial<Record<PzmTimeFormatParts, number>> = {},
): PzmTextMaskPipeHandler {
    const timeFormatArray = [`HH`, `MM`, `SS`, `MS`] as const;
    const safeValues = {
        ...PZM_MAX_TIME_VALUES,
        ...maxValues,
    };

    return (conformedValue: string): string | PzmTextMaskPipeResult | false => {
        const indexesOfPipedChars: number[] = [];
        const conformedValueArr = conformedValue.split(``);

        timeFormatArray.forEach(format => {
            const position = timeMode.indexOf(format);
            const maxFirstDigit = parseInt(String(safeValues[format]).slice(0, 1), 10);

            if (parseInt(conformedValueArr[position], 10) > maxFirstDigit) {
                conformedValueArr[position + 1] = conformedValueArr[position];
                conformedValueArr[position] = `0`;
                indexesOfPipedChars.push(position);
            }
        });

        const isInvalid = timeFormatArray.some(
            format =>
                parseInt(conformedValue.slice(timeMode.indexOf(format), 2), 10) >
                safeValues[format],
        );

        return isInvalid
            ? false
            : {
                  value: conformedValueArr.join(``),
                  indexesOfPipedChars,
              };
    };
}
