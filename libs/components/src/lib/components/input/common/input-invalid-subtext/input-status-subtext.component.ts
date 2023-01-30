import { Component, ChangeDetectionStrategy, Injector } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { DefaultInputInvalidTextClass } from '../base/input-invalid-text-base-class.directive';

@Component({
  selector: 'prizm-input-status-subtext',
  templateUrl: './input-status-subtext.component.html',
  styleUrls: ['./input-status-subtext.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class PrizmInputStatusSubtextComponent extends DefaultInputInvalidTextClass {
  constructor(injector: Injector) {
    super(injector);
  }
}
