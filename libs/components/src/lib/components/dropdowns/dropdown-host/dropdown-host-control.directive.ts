import { Directive, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Directive({
  selector: '[prizmDropdownHostControl]',
  providers: [PrizmDestroyService],
  exportAs: 'prizmDropdownHostControl',
  standalone: true,
})
export class PrizmDropdownHostControlDirective {
  @Input() enabled = true;
}
