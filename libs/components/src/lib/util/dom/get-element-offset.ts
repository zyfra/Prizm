import { prizmAssert } from '@prizm-ui/core';

export function prizmGetElementOffset(
  host: Element,
  element: HTMLElement
): { offsetTop: number; offsetLeft: number } {
  prizmAssert.assert(host.contains(element), 'Host must contain element');

  let { offsetTop, offsetLeft, offsetParent } = element;

  while (offsetParent && offsetParent instanceof HTMLElement && offsetParent !== host) {
    offsetTop += offsetParent.offsetTop;
    offsetLeft += offsetParent.offsetLeft;
    offsetParent = offsetParent.offsetParent;
  }

  return { offsetTop, offsetLeft };
}
