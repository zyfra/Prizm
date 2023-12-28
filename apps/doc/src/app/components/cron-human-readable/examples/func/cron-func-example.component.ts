import { Component } from '@angular/core';
import { prizmCronHRToString } from '@prizm-ui/components';

@Component({
  selector: 'prizm-cron-func-example',
  templateUrl: './cron-func-example.component.html',
  styles: [
    `
      .box {
        color: var(--prizm-text-icon-secondary);
      }
    `,
  ],
})
export class PrizmCronFuncExampleComponent {
  prizmCronHRToString = prizmCronHRToString;
}
