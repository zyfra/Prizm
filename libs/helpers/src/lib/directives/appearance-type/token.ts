import { InjectionToken } from '@angular/core';
import { PrizmAppearanceType } from '../../types/appearance.types';

export const PRIZM_APPEARANCE_TYPE_DEFAULT_VALUE = new InjectionToken<PrizmAppearanceType>(
  'appearance type default value'
);
