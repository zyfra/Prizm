import { zuiSvgNodeFilter } from '../constants/svg-node-filter';
import { zuiIsNativeKeyboardFocusable } from './is-native-keyboard-focusable';
import { zuiIsNativeMouseFocusable } from './is-native-mouse-focusable';

/**
 * Finds the closest element that can be focused with a keyboard or mouse
 */
export function pzmGetClosestFocusable(
    initial: HTMLElement,
    prev: boolean = false,
    root: Node,
    keyboard: boolean = true,
): HTMLElement | null {
    if (!root.ownerDocument) {
        return null;
    }

    const check = keyboard ? zuiIsNativeKeyboardFocusable : zuiIsNativeMouseFocusable;

    const treeWalker = root.ownerDocument.createTreeWalker(
        root,
        NodeFilter.SHOW_ELEMENT,
        zuiSvgNodeFilter,
        false,
    );

    treeWalker.currentNode = initial;

    while (prev ? treeWalker.previousNode() : treeWalker.nextNode()) {
        if (treeWalker.currentNode instanceof HTMLElement) {
            initial = treeWalker.currentNode;
        }

        if (check(initial)) {
            return initial;
        }
    }

    return null;
}
