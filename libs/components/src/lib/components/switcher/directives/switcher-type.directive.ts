import { Directive, Input } from '@angular/core';
import { PrizmSwitcherType } from '../switcher.interface';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Directive({
  selector: '[prizmSwitcherType]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmSwitcherTypeDirective {
  @Input()
  public type: PrizmSwitcherType = 'inner';
}
