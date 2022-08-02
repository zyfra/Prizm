import {zuiIsNativeKeyboardFocusable} from './is-native-keyboard-focusable';

export function zuiIsNativeMouseFocusable(element: Element): boolean {
    return (
        !element.hasAttribute('disabled') &&
        (element.getAttribute('tabIndex') === '-1' || zuiIsNativeKeyboardFocusable(element))
    );
}
