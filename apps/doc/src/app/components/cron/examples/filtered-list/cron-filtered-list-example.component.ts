import { Component } from '@angular/core';
import {
  PrizmCronPeriod,
  PrizmCronTabSpecifiedList,
  PrizmCronUiBaseType,
  PrizmCronUiDayType,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-cron-filtered-list-example',
  templateUrl: './cron-filtered-list-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmCronFilteredListExampleComponent {
  public value = true;
  public showedList: PrizmCronTabSpecifiedList = {
    second: [PrizmCronUiBaseType.every],
    month: [PrizmCronUiBaseType.every],
    minute: [PrizmCronUiBaseType.every],
    hour: [PrizmCronUiBaseType.every],
    year: [PrizmCronUiBaseType.every],
    day: [PrizmCronUiDayType.every],
  };
  public period: PrizmCronPeriod = {
    start: null,
    end: null,
    indefinitely: true,
  };
}
