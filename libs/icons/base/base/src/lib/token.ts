import { InjectionToken } from '@angular/core';
import { prizmCreateIconsLoader, PrizmIconsLoader } from '@prizm-ui/icons/core';
import { PRIZM_ICONS_LAZY_SET } from './lazy-icon-set';

export const PRIZM_ICONS_LOADER = new InjectionToken<PrizmIconsLoader>('PRIZM_ICONS_LOADER', {
  factory: () => prizmCreateIconsLoader(PRIZM_ICONS_LAZY_SET),
});
