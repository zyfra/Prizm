import { Directive, Input } from '@angular/core';
import { ZuiMenuItem } from '../model/zui-menu-item.interface';
@Directive({
  selector: '[zuiNavMenuGroup]',
})
export class ZuiNavMenuGroupDirective {
  @Input() items: ZuiMenuItem[] = [];
  @Input() header: string;
}
