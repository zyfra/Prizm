import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IndicatorStatus } from '../../../indicator/indicator.models';

@Component({
  selector: 'prizm-header-module-btn',
  templateUrl: './prizm-header-module-btn.component.html',
  styleUrls: ['./prizm-header-module-btn.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmHeaderModuleBtnComponent {
  @Input() public icon = 'alerts-bell';
  @Input() public alertsCount = 0;
  @Input() public title = '';
  @Input() public status: IndicatorStatus = 'info';
}
