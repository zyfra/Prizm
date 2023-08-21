import { Component } from '@angular/core';
import { prizmCronHRToString } from '@prizm-ui/components';

@Component({
  selector: 'prizm-cron-func-example',
  templateUrl: './cron-func-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmCronFuncExampleComponent {
  prizmCronHRToString = prizmCronHRToString;
}
