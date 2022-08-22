import { Directive } from '@angular/core';
import { ZUI_VALUE_ACCESSOR_PROVIDER } from '../../providers/value-accessor.provider';

@Directive({
    selector: `[zuiValueAccessor]`,
    providers: [ZUI_VALUE_ACCESSOR_PROVIDER],
})
export class ZuiValueAccessorDirective {}
