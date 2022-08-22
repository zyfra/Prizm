/**
 * Finds the nearest parent with scroll in it
 */
export function zuiGetScrollParent(
    element: Element | null,
    vertical: boolean = true,
): Element | null {
    if (element === null) {
        return null;
    }

    if (vertical && element.scrollHeight > element.clientHeight) {
        return element;
    }

    if (!vertical && element.scrollWidth > element.clientWidth) {
        return element;
    }

    return zuiGetScrollParent(element.parentElement, vertical);
}
