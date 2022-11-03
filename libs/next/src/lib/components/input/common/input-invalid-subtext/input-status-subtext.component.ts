import { Component, ChangeDetectionStrategy, Injector } from '@angular/core';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { DefaultInputInvalidTextClass } from '../base/input-invalid-text-base-class.directive';

@Component({
  selector: 'pzm-input-status-subtext',
  templateUrl: './input-status-subtext.component.html',
  styleUrls: ['./input-status-subtext.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PzmDestroyService],
})
export class PzmInputStatusSubtextComponent extends DefaultInputInvalidTextClass {
  constructor(injector: Injector) {
    super(injector);
  }
}

