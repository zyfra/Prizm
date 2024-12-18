import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDay } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-date-base-example',
  templateUrl: './input-layout-date-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }

      [prizmButton] {
        margin-right: 24px;
      }
    `,
  ],
})
export class PrizmInputLayoutDateBaseExampleComponent {
  public readonly control = new UntypedFormControl(new PrizmDay(2017, 0, 15));

  public setDefaultValue(): void {
    this.control.setValue(new PrizmDay(2022, 1, 1));
  }

  public clear(): void {
    this.control.setValue(null);
  }
}
