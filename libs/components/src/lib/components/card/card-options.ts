import { InjectionToken } from '@angular/core';
import { PrizmShadowType } from '../../directives/shadow';

export interface PrizmCardOptions {
  shadow: PrizmShadowType;
}

export const prizmCardDefaultOptions: PrizmCardOptions = {
  shadow: 'mini-bottom',
};

export const PRIZM_CARD_OPTIONS = new InjectionToken<Partial<PrizmCardOptions>>('Prizm card options');
