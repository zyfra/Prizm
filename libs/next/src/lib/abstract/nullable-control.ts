import { Directive } from '@angular/core';
import { AbstractPzmControl } from './control';

@Directive()
export abstract class AbstractPzmNullableControl<T> extends AbstractPzmControl<T | null> {
    protected getFallbackValue(): T | null {
        return null;
    }
}
