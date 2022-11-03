import { Directive, HostBinding, Input } from '@angular/core';
import { PrizmShadowType, PrizmShadowValue } from './models';
import { pzmGetShadow } from './shadow.util';

@Directive({
  selector: '[pzmShadow]',
})
export class PrizmShadowDirective {
  @Input('pzmShadow')
  type: PrizmShadowType;

  @HostBinding('style.box-shadow')
  private get boxShadow(): PrizmShadowValue {
    return pzmGetShadow(this.type)
  }
}
