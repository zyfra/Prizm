import { Directive, HostBinding, Input } from '@angular/core';
import { PzmShadowType, PzmShadowValue } from './models';
import { zuiGetShadow } from './shadow.util';

@Directive({
  selector: '[pzmShadow]',
})
export class PzmShadowDirective {
  @Input('pzmShadow')
  type: PzmShadowType;

  @HostBinding('style.box-shadow')
  private get boxShadow(): PzmShadowValue {
    return zuiGetShadow(this.type)
  }
}
