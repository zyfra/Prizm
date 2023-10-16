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

  public corrector(str: string): string {
    const result = str
      .split(',')
      .reduce((base: string[], i) => {
        const trimmed = i.replace(/[ ]+/g, '');
        const int = parseInt(trimmed, 10);

        if (!trimmed) {
          base.push(trimmed);
          return base;
        }

        if (!int) return base;
        if (int < 1) return base;

        if (int > 9999) base.push('10000');
        else base.push(i);

        return base;
      }, [])
      .join(', ');

    return result;
  }
  public saveSpecified(str: string): void {
    return this.cronUiState.updateSpecified(str.replace(/[ ]+/g, '').split(','));
  }
}
