import {pzmGetNativeFocused} from './get-native-focused';
import {pzmSetNativeFocused} from './set-native-focused';

/**
 * Finds and blurs current active element, including shadow DOM
 */
export function pzmBlurNativeFocused(documentRef: Document): void {
    const activeElement = pzmGetNativeFocused(documentRef);

    if (activeElement instanceof HTMLElement) {
        pzmSetNativeFocused(activeElement, false);
    }
}
