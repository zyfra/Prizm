import { Directive, Input } from '@angular/core';
import { PrizmMenuItem } from '../model/pzm-menu-item.interface';
@Directive({
  selector: '[pzmNavMenuGroup]',
})
export class PrizmNavMenuGroupDirective {
  @Input() items: PrizmMenuItem[] = [];
  @Input() header: string;
}
