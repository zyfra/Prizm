import { InjectionToken } from '@angular/core';

export const PRIZM_ANIMATIONS_DURATION = new InjectionToken<number>('Duration of all animations in ms', {
  factory: (): number => 300,
});
