import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zyfra-calendar-test',
  templateUrl: './calendar-test.component.html',
  styleUrls: ['./calendar-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarTestComponent {
  public readonly control = new FormControl('13.01.2022');
}
