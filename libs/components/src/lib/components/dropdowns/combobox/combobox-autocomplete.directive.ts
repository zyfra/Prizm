import { Directive } from '@angular/core';
import { PRIZM_COMBOBOX_SHOW_DROPDOWN_ON_EMPTY } from './combobox.options';

@Directive({
  selector: 'prizm-combobox[autocomplete]',
  standalone: true,
  providers: [
    {
      provide: PRIZM_COMBOBOX_SHOW_DROPDOWN_ON_EMPTY,
      useValue: false,
    },
  ],
})
export class PrizmComboboxAutocompleteDirective {}
