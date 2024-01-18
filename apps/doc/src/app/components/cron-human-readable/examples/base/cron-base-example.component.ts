import { Component } from '@angular/core';
import { prizmCronHRToString } from '@prizm-ui/components';

@Component({
  selector: 'prizm-cron-base-example',
  templateUrl: './cron-base-example.component.html',
  styles: [
    `
      .box {
        color: var(--prizm-text-icon-secondary);
      }
    `,
  ],
})
export class PrizmCronBaseExampleComponent {
  protected readonly prizmCronHRToString = prizmCronHRToString;
}
