import { Directive } from '@angular/core';

@Directive({
  selector: 'prizm-input-select[combobox]',
  exportAs: 'prizmInputSelectCombobox',
  standalone: true,
})
export class PrizmInputSelectComboboxDirective {}
