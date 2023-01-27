import { PrizmIdentityMatcher } from '../../types/matcher';

/**
 * Checks identity for nullable elements.
 *
 * @param a element a
 * @param b element b
 * @param handler called if both elements are not null
 * @return true if either both are null or they pass identity handler
 */
export function prizmNullableSame<T>(a: T | null, b: T | null, handler: PrizmIdentityMatcher<T>): boolean {
  if (a === null) {
    return b === null;
  }

  if (b === null) {
    return false;
  }

  return handler(a, b);
}
