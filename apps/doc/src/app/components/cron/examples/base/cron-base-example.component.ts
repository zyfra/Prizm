import { Component } from '@angular/core';
import { PrizmCronPeriod } from '@prizm-ui/components';

@Component({
  selector: 'prizm-cron-base-example',
  templateUrl: './cron-base-example.component.html',
})
export class PrizmCronBaseExampleComponent {
  public value = true;
  public period: PrizmCronPeriod = {
    start: null,
    end: null,
    indefinitely: true,
  };
}
