import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDay, PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-date-time-custom-time-picker-example',
  templateUrl: './input-layout-date-time-custom-time-picker-example.component.html',
  styles: [
    `
      [prizmButton] {
        margin-right: 24px;
      }
    `,
  ],
})
export class PrizmInputLayoutDateTimeCustomPickerExampleComponent {
  public readonly control = new UntypedFormControl([new PrizmDay(2022, 2, 15), new PrizmTime(12, 30)]);
  public min: [PrizmDay, PrizmTime] = [new PrizmDay(2022, 1, 1), new PrizmTime(9, 0)];
  public max: [PrizmDay, PrizmTime] = [new PrizmDay(2025, 10, 10), new PrizmTime(18, 30)];

  public setDefaultValue(): void {
    this.control.setValue([new PrizmDay(2022, 1, 1), new PrizmTime(6, 0)]);
  }

  public clear(): void {
    this.control.setValue(null);
  }

  public getMinMaxTime(dayToCompare: [PrizmDay, PrizmTime]): PrizmTime | null {
    if (!this.control.value || !this.control.value[0]) return null;
    return this.control.value[0].daySame(dayToCompare[0]) ? dayToCompare[1] : null;
  }
}
