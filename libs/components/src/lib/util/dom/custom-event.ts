/** @deprecated only needed for IE, remove in 2.0 */
export function prizmCustomEvent<T = null>(
  name: string,
  { bubbles = false, cancelable = false, detail = null }: CustomEventInit<T | null> = {},
  documentRef: Document
): CustomEvent {
  if (typeof CustomEvent === `function`) {
    return new CustomEvent(name, { bubbles, cancelable, detail });
  }

  const customEvent = documentRef.createEvent(`CustomEvent`);

  customEvent.initCustomEvent(name, bubbles, cancelable, detail);

  return customEvent;
}
