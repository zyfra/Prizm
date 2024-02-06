// Create an InjectionToken for the 16px size icons loader.
// It uses the `createIconLoader` function with the 16px size lazy icon set.
import { InjectionToken } from '@angular/core';
import { prizmCreateIconsLoader, PrizmIconsLoader } from '@prizm-ui/icons/core';
import { PRIZM_ICONS_FULL_LAZY_SET } from './lazy-icon-set-full';

export const PRIZM_ICONS_FULL_LOADER = new InjectionToken<PrizmIconsLoader>('PRIZM_ICONS_FULL_LOADER', {
  factory: () => prizmCreateIconsLoader(PRIZM_ICONS_FULL_LAZY_SET),
});
