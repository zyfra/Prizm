import { AnimationOptions } from '@angular/animations';
import { inject, InjectionToken } from '@angular/core';

import { PZM_ANIMATIONS_DURATION } from './animations-duration';

export const PZM_ANIMATION_OPTIONS = new InjectionToken<AnimationOptions>(
  'Options for PZM animations',
  {
    factory: (): AnimationOptions  => ({
      params: {
        duration: inject(PZM_ANIMATIONS_DURATION),
      },
    }),
  },
);
