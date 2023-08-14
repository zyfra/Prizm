import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-time-with-preset-example',
  templateUrl: './input-layout-time-with-preset-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutTimeWithPresetExampleComponent {
  public readonly value = new UntypedFormControl(new PrizmTime(12, 30, 25, 500));
  public readonly items = new Array(48)
    .fill(null)
    .map((_, i) => new PrizmTime(Math.floor(i / 2), i % 2 === 0 ? 0 : 30, 0, 0));
}
