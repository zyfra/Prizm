import { AnimationOptions } from '@angular/animations';
import { inject, InjectionToken } from '@angular/core';

import { ZUI_ANIMATIONS_DURATION } from './animations-duration';

export const PZM_ANIMATION_OPTIONS = new InjectionToken<AnimationOptions>(
  'Options for ZUI animations',
  {
    factory: (): AnimationOptions  => ({
      params: {
        duration: inject(ZUI_ANIMATIONS_DURATION),
      },
    }),
  },
);
