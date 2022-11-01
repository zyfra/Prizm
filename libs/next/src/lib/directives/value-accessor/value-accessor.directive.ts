import { Directive } from '@angular/core';
import { PZM_VALUE_ACCESSOR_PROVIDER } from '../../providers/value-accessor.provider';

@Directive({
    selector: `[pzmValueAccessor]`,
    providers: [PZM_VALUE_ACCESSOR_PROVIDER],
})
export class PzmValueAccessorDirective {}
