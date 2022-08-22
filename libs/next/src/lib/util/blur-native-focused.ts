import {zuiGetNativeFocused} from './get-native-focused';
import {zuiSetNativeFocused} from './set-native-focused';

/**
 * Finds and blurs current active element, including shadow DOM
 */
export function zuiBlurNativeFocused(documentRef: Document): void {
    const activeElement = zuiGetNativeFocused(documentRef);

    if (activeElement instanceof HTMLElement) {
        zuiSetNativeFocused(activeElement, false);
    }
}
