import { Directive, Input } from '@angular/core';
import { PrizmMenuItem } from '../model/prizm-menu-item.interface';
@Directive({
  selector: '[prizmNavMenuGroup]',
})
export class PrizmNavMenuGroupDirective {
  @Input() items: PrizmMenuItem[] = [];
  @Input() header: string;
}
