import {zuiGetNativeFocused} from './zui-get-native-focused';
import {zuiSetNativeFocused} from './zui-set-native-focused';

/**
 * Finds and blurs current active element, including shadow DOM
 */
export function zuiBlurNativeFocused(documentRef: Document): void {
    const activeElement = zuiGetNativeFocused(documentRef);

    // TODO: iframe warning
    if (activeElement instanceof HTMLElement) {
        zuiSetNativeFocused(activeElement, false);
    }
}
