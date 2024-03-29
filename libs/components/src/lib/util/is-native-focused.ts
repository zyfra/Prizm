import { prizmGetNativeFocused } from './get-native-focused';

/**
 * Checks if element is focused.
 *
 * Could return true even after blur since element remains focused if you switch away from a browser tab.
 *
 * @param node or null (as a common return value of DOM nodes walking)
 * @return true if focused
 */
export function prizmIsNativeFocused(node: Node | null): boolean {
  return !!node && !!node.ownerDocument && prizmGetNativeFocused(node.ownerDocument) === node;
}
