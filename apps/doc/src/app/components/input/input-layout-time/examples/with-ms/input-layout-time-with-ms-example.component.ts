import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-time-with-ms-example',
  templateUrl: './input-layout-time-with-ms-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutTimeWithMsExampleComponent {
  public readonly value = new UntypedFormControl(new PrizmTime(12, 30, 25, 500));
}
