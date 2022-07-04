import {
  Component,
  ChangeDetectionStrategy,
  Injector,
} from '@angular/core';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import {
  DefaultInputInvalidTextClass,
} from './input-invalid-text-base-class.directive';

@Component({
  selector: 'zui-input-status-subtext',
  templateUrl: './input-status-subtext.component.html',
  styleUrls: ['./input-status-subtext.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ZuiDestroyService],
})
export class InputStatusSubtextComponent extends DefaultInputInvalidTextClass {
  constructor(injector: Injector) {
    super(injector);
  }
}
