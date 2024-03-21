import { PRIZM_ICONS_LOADER, prizmCreateIconsLoader } from '@prizm-ui/icons/core';
import { Provider } from '@angular/core';
import { PRIZM_ICONS_LAZY_SET } from './icons';

export function prizmIconsProvideLazyLoader(): Provider[] {
  return [
    {
      provide: PRIZM_ICONS_LOADER,
      useFactory: () => {
        return prizmCreateIconsLoader(PRIZM_ICONS_LAZY_SET);
      },
    },
  ];
}
