import { PrizmDateMode } from '../../types/date-mode';
import { prizmCreateDateNgxMask } from './create-date-mask';

export function prizmCreateDateRangeMask(
    dateMode: PrizmDateMode,
    dateSeparator: string,
): string {
    console.assert(
        dateSeparator.length === 1,
        `Separator should consist of only 1 symbol`,
    );

    const dateMask = prizmCreateDateNgxMask(dateMode, dateSeparator);

    return `${dateMask} - ${dateMask}`
}
