import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-native-date-base-example',
  templateUrl: './input-native-date-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
  providers: [],
})
export class PrizmInputNativeDateBaseExampleComponent {
  public readonly control = new FormControl(new Date());
}
