import { Directive, Input } from '@angular/core';
import { ZyfraMenuItem } from '../model/zyfra-menu-item.interface';
@Directive({
  selector: '[zyfraNavMenuGroup]'
})
export class ZyfraNavMenuGroupDirective {
  @Input() items: ZyfraMenuItem[] = [];
  @Input() header: string;
}
