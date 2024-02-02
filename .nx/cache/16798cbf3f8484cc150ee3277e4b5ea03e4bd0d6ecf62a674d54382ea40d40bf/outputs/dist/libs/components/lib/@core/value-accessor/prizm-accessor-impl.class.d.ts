import { ControlValueAccessor } from '@angular/forms';
import { PrizmAbstractTestId } from '../../abstract/interactive';
export declare abstract class PrizmAccessorImplClass extends PrizmAbstractTestId implements ControlValueAccessor {
    accessorValue: unknown;
    accessorOnChangeFn: (_: unknown) => unknown;
    accessorOnTouchedFn: VoidFunction;
    accessorIsDisabled: boolean;
    writeValue(obj: unknown): void;
    registerOnChange(fn: (_: unknown) => unknown): void;
    registerOnTouched(fn: VoidFunction): void;
    setDisabledState(isDisabled: boolean): void;
}
