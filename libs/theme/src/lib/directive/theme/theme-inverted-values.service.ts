import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PrizmThemeInvertedValues } from './model';
import { PRIZM_CONST_DEFAULT_INVERTED_VALUES } from './const';

@Injectable({
  providedIn: 'root',
})
export class PrizmThemeInvertedValuesService {
  readonly value$$ = new BehaviorSubject<PrizmThemeInvertedValues>(PRIZM_CONST_DEFAULT_INVERTED_VALUES);
}
