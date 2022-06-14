import { Component } from '@angular/core';
import { ZuiInputControl } from '../zui-input-control.class';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { ZuiInputTextComponent } from '../zui-input-text.directive';

// TODO Удалить директиву если не будет использовнана для маски
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[zuiInputPhone]',
  template: '',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.ng-invalid]': 'ngControl?.invalid',
    '[class.ng-valid]': 'ngControl?.valid',
    '[class.ng-dirty]': 'ngControl?.dirty',
    '[class.ng-touched]': 'ngControl?.touched',
    '[class.ng-filled]': 'empty',
    '[disabled]': 'disabled',
    '[required]': 'required',
  },
  styleUrls: ['../zui-input-text.directive.less'],
  providers: [{ provide: ZuiInputControl, useExisting: ZuiInputPhoneComponent }, ZuiDestroyService],
})
export class ZuiInputPhoneComponent extends ZuiInputTextComponent {
  // @HostBinding('attr.mask') mask = ''
}
