import { PZM_MAX_TIME_VALUES } from '../../constants/max-time-values';
import { PZM_DIGIT_REGEXP } from '../../constants/regexp';
import { PzmTimeFormatParts } from '../../types/time-format-parts';
import { PzmTimeMode } from '../../types/time-mode';
import { PzmTextMaskList } from './text-mask-list';

function pzmCreateTimePartMask(
    maxPartValue: number,
    prefix?: string,
): Array<string | RegExp> {
    const {length} = String(maxPartValue);
    const regExp = new Array(length).fill(PZM_DIGIT_REGEXP);

    if (prefix) {
        regExp.unshift(prefix);
    }

    return regExp;
}

/**
 * @deprecated
 * use pzmCreateTimeNgxMask
 * */
export function pzmCreateTimeMask(
    mode: PzmTimeMode,
    maxValues: Partial<Record<PzmTimeFormatParts, number>> = {},
): PzmTextMaskList {
    const {HH, MM, SS, MS} = {
        ...PZM_MAX_TIME_VALUES,
        ...maxValues,
    };

    return [
        ...pzmCreateTimePartMask(HH),
        ...pzmCreateTimePartMask(MM, `:`),
        ...(mode.includes(`HH:MM:SS`) ? pzmCreateTimePartMask(SS, `:`) : []),
        ...(mode === `HH:MM:SS.MSS` ? pzmCreateTimePartMask(MS, `.`) : []),
    ];
}

export function pzmCreateTimeNgxMask(
    mode: PzmTimeMode,
    maxValues: Partial<Record<PzmTimeFormatParts, number>> = {},
): string {
    return `Hh:m0${(mode.includes(`HH:MM:SS`) ? `:s0` : ``)}${(mode === `HH:MM:SS.MSS` ? `.000` : ``)}`;

}
