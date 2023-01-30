import { Directive } from '@angular/core';
import { AbstractPrizmControl } from './control';

@Directive()
export abstract class AbstractPrizmNullableControl<T> extends AbstractPrizmControl<T | null> {
  protected getFallbackValue(): T | null {
    return null;
  }
}
