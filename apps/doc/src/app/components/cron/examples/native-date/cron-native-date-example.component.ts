import { Component } from '@angular/core';
import { PrizmCronPeriod, prizmGetInputDateTimeNativeTransformer } from '@prizm-ui/components';

@Component({
  selector: 'prizm-cron-native-date-example',
  templateUrl: './cron-native-date-example.component.html',
  providers: [prizmGetInputDateTimeNativeTransformer()],
})
export class PrizmCronNativeDateExampleComponent {
  public value = true;
  public period: PrizmCronPeriod = {
    start: null,
    end: null,
    indefinitely: true,
  };
}
