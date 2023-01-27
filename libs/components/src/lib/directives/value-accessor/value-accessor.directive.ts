import { Directive } from '@angular/core';
import { PRIZM_VALUE_ACCESSOR_PROVIDER } from '../../providers/value-accessor.provider';

@Directive({
  selector: `[prizmValueAccessor]`,
  providers: [PRIZM_VALUE_ACCESSOR_PROVIDER],
})
export class PrizmValueAccessorDirective {}
