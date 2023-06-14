import { InjectionToken } from '@angular/core';
import { PrizmTimeMode } from '../../types';

export const PRIZM_TIME_FORMAT = new InjectionToken<PrizmTimeMode>(`Active time format for Prizm UI`, {
  factory: (): PrizmTimeMode => `HH:MM`,
});
