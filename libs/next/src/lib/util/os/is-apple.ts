import { pzmIsIos } from './is-ios';

const SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;

export function pzmIsApple(navigator: Navigator): boolean {
    return pzmIsIos(navigator) || SAFARI_REG_EXP.test(navigator.userAgent.toLowerCase());
}
