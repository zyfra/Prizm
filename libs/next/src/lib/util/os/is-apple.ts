import { zuiIsIos } from './is-ios';

const SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;

export function zuiIsApple(navigator: Navigator): boolean {
    return zuiIsIos(navigator) || SAFARI_REG_EXP.test(navigator.userAgent.toLowerCase());
}
