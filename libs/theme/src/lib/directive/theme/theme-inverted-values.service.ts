import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PrizmThemeInvertedValues } from './model';
import { PRIZM_CONST_DEFAULT_INVERTED_VALUES } from './const';

@Injectable({
  providedIn: 'root',
})
export class PrizmThemeInvertedValuesService {
  readonly value$$: BehaviorSubject<PrizmThemeInvertedValues>;

  private invertedValues: PrizmThemeInvertedValues;

  constructor(
    @Inject('PRIZM_THEME_INVERTED_VALUES') @Optional() customInvertedValues: PrizmThemeInvertedValues
  ) {
    this.invertedValues = customInvertedValues ?? PRIZM_CONST_DEFAULT_INVERTED_VALUES;
    this.value$$ = new BehaviorSubject<PrizmThemeInvertedValues>(this.invertedValues);
  }
}
