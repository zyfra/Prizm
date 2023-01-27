import { prizmGetNativeFocused } from './get-native-focused';
import { prizmSetNativeFocused } from './set-native-focused';

/**
 * Finds and blurs current active element, including shadow DOM
 */
export function prizmBlurNativeFocused(documentRef: Document): void {
  const activeElement = prizmGetNativeFocused(documentRef);

  if (activeElement instanceof HTMLElement) {
    prizmSetNativeFocused(activeElement, false);
  }
}
