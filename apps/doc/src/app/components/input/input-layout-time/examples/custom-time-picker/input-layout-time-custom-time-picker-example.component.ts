import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-time-custom-time-picker-example',
  templateUrl: './input-layout-time-custom-time-picker-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutTimeCustomTimePickerExampleComponent {
  public readonly time = new PrizmTime(12, 30);
  public readonly value = new UntypedFormControl(this.time);
}
