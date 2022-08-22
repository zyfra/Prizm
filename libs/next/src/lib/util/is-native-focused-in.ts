import {zuiGetNativeFocused} from './get-native-focused';

/**
 * Checks if focused element is within given element.
 *
 * @param node
 * @return true if focused node is contained within element
 */
export function zuiIsNativeFocusedIn(node: Node): boolean {
    // !node.contains - check for IE11
    if (!node.ownerDocument || !node.contains) {
        return false;
    }

    const nativeFocused = zuiGetNativeFocused(node.ownerDocument);

    return nativeFocused !== null && node.contains(nativeFocused);
}
