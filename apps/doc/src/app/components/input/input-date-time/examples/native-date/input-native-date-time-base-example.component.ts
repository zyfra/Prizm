import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { prizmGetInputDateTimeNativeTransformer } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-date-time-native-example',
  templateUrl: './input-native-date-time-base-example.component.html',
  providers: [
    prizmGetInputDateTimeNativeTransformer()
  ],
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PrizmInputDateTimeNativeExampleComponent {
  public readonly value = new FormControl(
    new Date(2020, 0, 1, 13, 30, 0, 0)
  );
}
