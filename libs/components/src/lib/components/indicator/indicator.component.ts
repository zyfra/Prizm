import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { IndicatorStatus, IndicatorType } from './indicator.models';
import { PrizmAbstractTestId } from '../../abstract/interactive';

@Component({
  selector: 'prizm-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndicatorComponent extends PrizmAbstractTestId {
  @Input() public type: IndicatorType = 'simple';
  @Input() public status: IndicatorStatus = 'info';

  override readonly testId_ = 'ui_indicator';

  public readonly iconMap = {
    info: 'alerts-information-variant',
    secondary: 'alerts-information-variant',
    success: 'selection-check-simple',
    warning: 'alerts-mark',
    danger: 'alerts-mark',
  };
}
