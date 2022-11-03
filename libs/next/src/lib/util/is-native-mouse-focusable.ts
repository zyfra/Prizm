import {pzmIsNativeKeyboardFocusable} from './is-native-keyboard-focusable';

export function pzmIsNativeMouseFocusable(element: Element): boolean {
    return (
        !element.hasAttribute('disabled') &&
        (element.getAttribute('tabIndex') === '-1' || pzmIsNativeKeyboardFocusable(element))
    );
}
