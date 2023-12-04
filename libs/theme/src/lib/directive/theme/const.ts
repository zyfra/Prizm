import { InjectionToken } from '@angular/core';
import { PrizmThemeInvertedValues } from './model';

export const PRIZM_CONST_DEFAULT_INVERTED_VALUES: PrizmThemeInvertedValues = {
  dark: 'light',
  light: 'dark',
};

export const PRIZM_THEME_INVERTED_VALUES = new InjectionToken<PrizmThemeInvertedValues>(
  `Prizm Theme inverted values`,
  {
    factory: (): PrizmThemeInvertedValues => PRIZM_CONST_DEFAULT_INVERTED_VALUES,
  }
);
