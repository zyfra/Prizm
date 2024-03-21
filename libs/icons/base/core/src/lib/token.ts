import { from, map, Observable, of } from 'rxjs';
import { InjectionToken } from '@angular/core';

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

export const PRIZM_ICONS_LOADER = new InjectionToken<PrizmIconsLoader>('prizm icons lazy loader');
export const PRIZM_ICONS_FULL_LOADER = new InjectionToken<PrizmIconsLoader>(
  'prizm icons lazy loader for full component'
);
