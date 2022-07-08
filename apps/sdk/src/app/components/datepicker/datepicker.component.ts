import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'zyfra-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent {
  mode = 'absolute';
  value = new Date();

  public valueChange(event: unknown, type: string): void {
    console.log(event, type);
  }
}
