export function prizmSetNativeFocused(
  element: HTMLOrSVGElement,
  focused = true,
  preventScroll = false
): void {
  if (focused) {
    element.focus({ preventScroll });
  } else {
    element.blur();
  }
}
