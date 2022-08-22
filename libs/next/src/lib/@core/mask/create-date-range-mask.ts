import { ZuiDateMode } from '../../types/date-mode';
import { zuiCreateDateNgxMask } from './create-date-mask';

export function zuiCreateDateRangeMask(
    dateMode: ZuiDateMode,
    dateSeparator: string,
): string {
    console.assert(
        dateSeparator.length === 1,
        `Separator should consist of only 1 symbol`,
    );

    const dateMask = zuiCreateDateNgxMask(dateMode, dateSeparator);

    return `${dateMask} - ${dateMask}`
}
