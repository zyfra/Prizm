import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrizmCronUiYearState } from '../../cron-ui-year.state';
import { PrizmCronUiBaseType } from '../../model';

@Component({
  selector: 'prizm-cron-year',
  styleUrls: ['./year.component.less', '../../cron-element.component.less'],
  templateUrl: './year.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCronYearComponent {
  @Input() specifiedList: PrizmCronUiBaseType[] = [];

  public readonly allowedYear = /[0-9 ,]/g;
  constructor(public readonly cronUiState: PrizmCronUiYearState) {}

  public join(str: string[]): string {
    return str.join(', ');
  }

  public saveSpecified(str: string): void {
    // str = this.removeMinus(str);
    return this.cronUiState.updateSpecified(str.replace(/[ ]+/g, '').split(','));
  }

  private removeMinus(str: string): string {
    return str.replace(/[-]/g, '');
  }
}
