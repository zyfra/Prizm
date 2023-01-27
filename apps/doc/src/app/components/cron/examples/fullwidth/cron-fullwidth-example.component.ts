import { Component } from '@angular/core';
import { PrizmCronPeriod, PrizmDay, PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-cron-fullwidth-example',
  templateUrl: './cron-fullwidth-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmCronFullwidthExampleComponent {
  public value = true;
  public period: PrizmCronPeriod = {
    start: null,
    end: null,
    indefinitely: true,
  };
}
