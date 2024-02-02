import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
export type PrizmIconsLazySet = {
    [iconName: string]: () => Promise<{
        data: string;
    }>;
};
export type PrizmIconsLoader = (name: string) => Observable<string | null>;
/**
 * Creates an icon loader function from a given lazy set of icons.
 * The loader function will attempt to load an icon and return an Observable of the icon data.
 *
 * @param {PrizmIconsLazySet} lazySet - The set of lazy-loaded icons.
 * @returns {PrizmIconsLoader} - The icon loader function.
 */
export declare function prizmCreateIconsLoader(lazySet: PrizmIconsLazySet): PrizmIconsLoader;
export declare const PRIZM_ICONS_LOADER: InjectionToken<PrizmIconsLoader>;
export declare const PRIZM_ICONS_16_LOADER: InjectionToken<PrizmIconsLoader>;
