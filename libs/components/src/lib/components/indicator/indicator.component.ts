import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { IndicatorStatus, IndicatorType } from './indicator.models';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { NgIf } from '@angular/common';

@Component({
  selector: 'prizm-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf],
})
export class PrizmIndicatorComponent extends PrizmAbstractTestId {
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
/**
 * TODO v5: remove
 * @deprecated
 * */
export const IndicatorComponent = PrizmIndicatorComponent;
