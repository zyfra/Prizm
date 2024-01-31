import { InjectionToken } from '@angular/core';
import { PRIZM_ICONS_LAZY_SET } from './lazy-icon-set';
import { PRIZM_ICONS_16_LAZY_SET } from './lazy-icon-set-16';
import { from, map, Observable, of } from 'rxjs';

// Define a type for the lazy icon set which maps icon names to lazy loader functions.
export type PrizmIconsLazySet = { [iconName: string]: () => Promise<{ data: string }> };

// Define a type for the icon loader function which takes an icon name and returns an observable.
export type PrizmIconsLoader = (name: string) => Observable<string | null>;

/**
 * Creates an icon loader function from a given lazy set of icons.
 * The loader function will attempt to load an icon and return an Observable of the icon data.
 *
 * @param {PrizmIconsLazySet} lazySet - The set of lazy-loaded icons.
 * @returns {PrizmIconsLoader} - The icon loader function.
 */
export function prizmCreateIconsLoader(lazySet: PrizmIconsLazySet): PrizmIconsLoader {
  return (name: string) => {
    const lazyIcon = lazySet[name];
    // Check if the icon loader function exists and load the icon, otherwise return null.
    return typeof lazyIcon === 'function' ? from(lazyIcon()).pipe(map(icon => icon.data)) : of(null);
  };
}

// Create an InjectionToken for the standard size icons loader.
// It uses the `createIconLoader` function with the standard size lazy icon set.
export const PRIZM_ICONS_LOADER = new InjectionToken<PrizmIconsLoader>('PRIZM_ICONS_LOADER', {
  factory: () => prizmCreateIconsLoader(PRIZM_ICONS_LAZY_SET),
});

// Create an InjectionToken for the 16px size icons loader.
// It uses the `createIconLoader` function with the 16px size lazy icon set.
export const PRIZM_ICONS_16_LOADER = new InjectionToken<PrizmIconsLoader>('PRIZM_ICONS_16_LOADER', {
  factory: () => prizmCreateIconsLoader(PRIZM_ICONS_16_LAZY_SET),
});
