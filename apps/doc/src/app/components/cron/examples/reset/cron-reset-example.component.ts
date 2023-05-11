import { Component } from '@angular/core';
import { PrizmCronPeriod } from '@prizm-ui/components';

@Component({
  selector: 'prizm-cron-reset-example',
  templateUrl: './cron-reset-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmCronResetExampleComponent {
  public value = true;
  public period: PrizmCronPeriod = {
    start: null,
    end: null,
    indefinitely: true,
  };
}
