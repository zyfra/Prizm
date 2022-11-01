import {pzmGetNativeFocused} from './get-native-focused';

/**
 * Checks if element is focused.
 *
 * Could return true even after blur since element remains focused if you switch away from a browser tab.
 *
 * @param node or null (as a common return value of DOM nodes walking)
 * @return true if focused
 */
export function pzmIsNativeFocused(node: Node | null): boolean {
    return (
        !!node && !!node.ownerDocument && pzmGetNativeFocused(node.ownerDocument) === node
    );
}
