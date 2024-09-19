import { Directive, Input } from '@angular/core';
import { PrizmSwitcherType } from '../switcher.interface';
import { PrizmDestroyService, PrizmSyncOnChange } from '@prizm-ui/helpers';

@Directive({
  selector: '[prizmSwitcherType]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmSwitcherTypeDirective extends PrizmSyncOnChange {
  @Input()
  public type: PrizmSwitcherType = 'inner';
}
