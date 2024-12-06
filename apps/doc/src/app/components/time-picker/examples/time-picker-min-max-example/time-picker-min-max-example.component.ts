import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-time-picker-min-max-example',
  templateUrl: './time-picker-min-max-example.component.html',
  styleUrls: ['./time-picker-min-max-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmTimePickerMinMaxExampleComponent {
  public time: PrizmTime | null = null;

  public minTime = new PrizmTime(2, 10, 5);
  public maxTime = new PrizmTime(22, 35, 47);

  public timeChanged(value: PrizmTime) {
    this.time = value;
  }

  public canceled() {
    this.time = null;
  }
}
