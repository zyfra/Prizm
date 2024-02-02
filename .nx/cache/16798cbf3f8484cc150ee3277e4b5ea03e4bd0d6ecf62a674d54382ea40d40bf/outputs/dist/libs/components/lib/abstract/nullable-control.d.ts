import { AbstractPrizmControl } from './control';
import * as i0 from "@angular/core";
export declare abstract class AbstractPrizmNullableControl<T> extends AbstractPrizmControl<T | null> {
    protected getFallbackValue(): T | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractPrizmNullableControl<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AbstractPrizmNullableControl<any>, never, never, {}, {}, never, never, false, never>;
}
