import { PzmDateMode } from '../../types/date-mode';
import { pzmCreateDateNgxMask } from './create-date-mask';

export function pzmCreateDateRangeMask(
    dateMode: PzmDateMode,
    dateSeparator: string,
): string {
    console.assert(
        dateSeparator.length === 1,
        `Separator should consist of only 1 symbol`,
    );

    const dateMask = pzmCreateDateNgxMask(dateMode, dateSeparator);

    return `${dateMask} - ${dateMask}`
}
