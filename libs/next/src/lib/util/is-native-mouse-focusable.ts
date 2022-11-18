import {prizmIsNativeKeyboardFocusable} from './is-native-keyboard-focusable';

export function prizmIsNativeMouseFocusable(element: Element): boolean {
    return (
        !element.hasAttribute('disabled') &&
        (element.getAttribute('tabIndex') === '-1' || prizmIsNativeKeyboardFocusable(element))
    );
}
