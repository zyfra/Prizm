import { AnimationOptions } from '@angular/animations';
import { inject, InjectionToken } from '@angular/core';

import { PRIZM_ANIMATIONS_DURATION } from './animations-duration';

export const PRIZM_ANIMATION_OPTIONS = new InjectionToken<AnimationOptions>('Options for PRIZM animations', {
  factory: (): AnimationOptions => ({
    params: {
      duration: inject(PRIZM_ANIMATIONS_DURATION),
    },
  }),
});
