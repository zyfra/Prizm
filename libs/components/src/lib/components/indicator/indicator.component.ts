import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IndicatorStatus, IndicatorType } from './indicator.models';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { NgIf } from '@angular/common';
import { PrizmIconsComponent } from '@prizm-ui/icons';
import { prizmIconsProvideLazyLoader } from '@prizm-ui/icons-loader';

@Component({
  selector: 'prizm-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, PrizmIconsComponent],
  providers: [prizmIconsProvideLazyLoader()],
})
export class PrizmIndicatorComponent extends PrizmAbstractTestId {
  @Input() public type: IndicatorType = 'simple';
  @Input() public status: IndicatorStatus = 'info';

  override readonly testId_ = 'ui_indicator';

  // public readonly iconMap = {
  //   info: 'alerts-information-variant',
  //   secondary: 'alerts-information-variant',
  //   success: 'selection-check-simple',
  //   warning: 'alerts-mark',
  //   danger: 'alerts-mark',
  // };
  public readonly iconMap = {
    info: 'info',
    secondary: 'info',
    success: 'check',
    warning: 'exclamation',
    danger: 'exclamation',
  };
}
/**
 * TODO v5: remove
 * @deprecated
 * */
export const IndicatorComponent = PrizmIndicatorComponent;
