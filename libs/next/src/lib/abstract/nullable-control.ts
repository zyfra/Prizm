import { Directive } from '@angular/core';
import { AbstractZuiControl } from './control';

@Directive()
export abstract class AbstractZuiNullableControl<T> extends AbstractZuiControl<T | null> {
    protected getFallbackValue(): T | null {
        return null;
    }
}
