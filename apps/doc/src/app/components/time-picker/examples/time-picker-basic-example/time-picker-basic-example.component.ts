import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-time-picker-basic-example',
  templateUrl: './time-picker-basic-example.component.html',
  styleUrls: ['./time-picker-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmTimePickerBasicExampleComponent {
  public time: PrizmTime | null = new PrizmTime(16, 26, 4);

  public timeChanged(value: PrizmTime) {
    this.time = value;
  }

  public canceled() {
    this.time = null;
  }
}
