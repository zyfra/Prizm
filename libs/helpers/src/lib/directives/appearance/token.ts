import { InjectionToken } from '@angular/core';
import { PrizmAppearance } from '../../types/appearance.types';

export const PRIZM_APPEARANCE_DEFAULT_VALUE = new InjectionToken<PrizmAppearance>('appearance token');
