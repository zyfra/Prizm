import { SimpleChanges } from '@angular/core';

export function prizmHasChanges(
  changes: SimpleChanges | undefined,
  name: string,
  ignoreFirstChange?: boolean
): boolean;
export function prizmHasChanges(
  changes: SimpleChanges | undefined,
  names: string[],
  ignoreFirstChange?: boolean
): boolean;
export function prizmHasChanges(
  changes: SimpleChanges | undefined,
  names: string | string[],
  ignoreFirstChange = false
): boolean {
  if (!changes) return false;

  const nameArray = Array.isArray(names) ? names : [names];

  return nameArray.some(name => {
    return name in changes && !(ignoreFirstChange && changes[name].isFirstChange());
  });
}
