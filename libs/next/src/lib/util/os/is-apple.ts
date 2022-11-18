import { prizmIsIos } from './is-ios';

const SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;

export function prizmIsApple(navigator: Navigator): boolean {
    return prizmIsIos(navigator) || SAFARI_REG_EXP.test(navigator.userAgent.toLowerCase());
}
