import { Directive, Input } from '@angular/core';
import { PzmMenuItem } from '../model/pzm-menu-item.interface';
@Directive({
  selector: '[pzmNavMenuGroup]',
})
export class PzmNavMenuGroupDirective {
  @Input() items: PzmMenuItem[] = [];
  @Input() header: string;
}
