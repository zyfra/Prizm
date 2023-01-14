import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmCronUiYearState } from '../../cron-ui-year.state';


@Component({
  selector: 'prizm-cron-year',
  styleUrls: [
    './year.component.less',
    '../../cron-element.component.less'
  ],
  templateUrl: './year.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCronYearComponent{
  constructor(
    public readonly cronUiState: PrizmCronUiYearState
  ) {
  }

  public join(str: string[]): string {
    return str.join(', ');
  }


  public saveSpecified(str:string): void {
    return this.cronUiState.updateSpecified(
      str.replace(/[ ]+/g,'').split(',')
    )
  }
}
