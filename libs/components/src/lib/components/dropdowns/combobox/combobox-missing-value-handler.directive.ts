import { Directive, Input } from '@angular/core';
import { PrizmComboboxMissingValueHandler } from './combobox.model';

@Directive({
  selector: 'prizm-combobox[missingValueHandler]',
  standalone: true,
})
export class PrizmComboboxMissingValueHandlerDirective<T> {
  @Input({
    required: true,
  })
  missingValueHandler!: PrizmComboboxMissingValueHandler<T>;
}
