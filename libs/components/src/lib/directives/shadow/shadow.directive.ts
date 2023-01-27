import { Directive, HostBinding, Input } from '@angular/core';
import { PrizmShadowType, PrizmShadowValue } from './models';
import { prizmGetShadow } from './shadow.util';

@Directive({
  selector: '[prizmShadow]',
})
export class PrizmShadowDirective {
  @Input('prizmShadow')
  type: PrizmShadowType;

  @HostBinding('style.box-shadow')
  private get boxShadow(): PrizmShadowValue {
    return prizmGetShadow(this.type);
  }
}
