import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { prizmGetInputDateNativeTransformer } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-native-date-base-example',
  templateUrl: './input-native-date-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `],
  providers: [
    prizmGetInputDateNativeTransformer()
  ]
})
export class PrizmInputNativeDateBaseExampleComponent {
  public readonly control = new FormControl(new Date());
}
