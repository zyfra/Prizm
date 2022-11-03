import { PZM_DIGIT_REGEXP } from '../../constants';
import { PrizmDateMode } from '../../types/date-mode';
import { PrizmTextMaskList } from './text-mask-list';

const TWO_DIGITS = new Array(2).fill(PZM_DIGIT_REGEXP);
const FOUR_DIGITS = new Array(4).fill(PZM_DIGIT_REGEXP);

/**
 * @deprecated
 * use pzmCreateDateNgxMask
 * */
export function pzmCreateDateMask(mode: PrizmDateMode, separator: string): PrizmTextMaskList {
    console.assert(separator.length === 1, `Separator should consist of only 1 symbol`);

    switch (mode) {
        case `YMD`:
            return [...FOUR_DIGITS, separator, ...TWO_DIGITS, separator, ...TWO_DIGITS];
        case `MDY`:
        case `DMY`:
        default:
            return [...TWO_DIGITS, separator, ...TWO_DIGITS, separator, ...FOUR_DIGITS];
    }
}

export function pzmCreateDateNgxMask(mode: PrizmDateMode, separator: string): any {
    console.assert(separator.length === 1, `Separator should consist of only 1 symbol`);

    switch (mode) {
        case `YMD`:
            return `0000${separator}00${separator}00`;
        case `MDY`:
        case `DMY`:
        default:
            return `00${separator}00${separator}0000`;
    }
}
