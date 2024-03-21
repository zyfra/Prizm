import { PRIZM_ICONS_FULL_LOADER, prizmCreateIconsLoader } from '@prizm-ui/icons/core';
import { PRIZM_ICONS_FULL_LAZY_SET } from './icons';
import { Provider } from '@angular/core';

export function prizmIconsFullProvideLazyLoader(): Provider[] {
  return [
    {
      provide: PRIZM_ICONS_FULL_LOADER,
      useFactory: () => {
        return prizmCreateIconsLoader(PRIZM_ICONS_FULL_LAZY_SET);
      },
    },
  ];
}
