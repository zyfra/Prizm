import { Component } from '@angular/core';
import { PrizmCronTabItem } from '@prizm-ui/components';

@Component({
  selector: 'prizm-cron-specified-tabs-example',
  templateUrl: './cron-specified-tabs-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmCronSpecifiedTabsExampleComponent {
  public value = true;

  public selected: PrizmCronTabItem = 'month';
  readonly tabs: PrizmCronTabItem[] = ['hour', 'day', 'month', 'year'];
}
