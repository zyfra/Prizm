import { ZUI_MAX_TIME_VALUES } from '../../constants/max-time-values';
import { ZUI_DIGIT_REGEXP } from '../../constants/regexp';
import { ZuiTimeFormatParts } from '../../types/time-format-parts';
import { ZuiTimeMode } from '../../types/time-mode';
import { ZuiTextMaskList } from './text-mask-list';

function zuiCreateTimePartMask(
    maxPartValue: number,
    prefix?: string,
): Array<string | RegExp> {
    const {length} = String(maxPartValue);
    const regExp = new Array(length).fill(ZUI_DIGIT_REGEXP);

    if (prefix) {
        regExp.unshift(prefix);
    }

    return regExp;
}

/**
 * @deprecated
 * use zuiCreateTimeNgxMask
 * */
export function zuiCreateTimeMask(
    mode: ZuiTimeMode,
    maxValues: Partial<Record<ZuiTimeFormatParts, number>> = {},
): ZuiTextMaskList {
    const {HH, MM, SS, MS} = {
        ...ZUI_MAX_TIME_VALUES,
        ...maxValues,
    };

    return [
        ...zuiCreateTimePartMask(HH),
        ...zuiCreateTimePartMask(MM, `:`),
        ...(mode.includes(`HH:MM:SS`) ? zuiCreateTimePartMask(SS, `:`) : []),
        ...(mode === `HH:MM:SS.MSS` ? zuiCreateTimePartMask(MS, `.`) : []),
    ];
}

export function zuiCreateTimeNgxMask(
    mode: ZuiTimeMode,
    maxValues: Partial<Record<ZuiTimeFormatParts, number>> = {},
): string {
    return `Hh:m0${(mode.includes(`HH:MM:SS`) ? `:s0` : ``)}${(mode === `HH:MM:SS.MSS` ? `.000` : ``)}`;

}
