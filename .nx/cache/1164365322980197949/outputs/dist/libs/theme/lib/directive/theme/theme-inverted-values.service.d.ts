import { BehaviorSubject } from 'rxjs';
import { PrizmThemeInvertedValues } from './model';
import * as i0 from '@angular/core';
export declare class PrizmThemeInvertedValuesService {
  readonly value$$: BehaviorSubject<PrizmThemeInvertedValues>;
  private invertedValues;
  constructor(customInvertedValues: PrizmThemeInvertedValues);
  static ɵfac: i0.ɵɵFactoryDeclaration<PrizmThemeInvertedValuesService, [{ optional: true }]>;
  static ɵprov: i0.ɵɵInjectableDeclaration<PrizmThemeInvertedValuesService>;
}
