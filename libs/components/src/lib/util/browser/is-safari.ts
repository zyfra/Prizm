export function prizmIsSafari(element: Element): boolean {
  const documentRef = element.ownerDocument;
  const windowRef = documentRef && documentRef.defaultView;

  return !!windowRef && 'safari' in windowRef;
}
