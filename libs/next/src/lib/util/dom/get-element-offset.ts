export function zuiGetElementOffset(
    host: Element,
    element: HTMLElement,
): {offsetTop: number; offsetLeft: number} {
    console.assert(host.contains(element), 'Host must contain element');

    let {offsetTop, offsetLeft, offsetParent} = element;

    while (offsetParent && offsetParent instanceof HTMLElement && offsetParent !== host) {
        offsetTop += offsetParent.offsetTop;
        offsetLeft += offsetParent.offsetLeft;
        offsetParent = offsetParent.offsetParent;
    }

    return {offsetTop, offsetLeft};
}
