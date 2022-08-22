import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ZuiDay, ZuiDayRange } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-input-date-range-disabled-example',
  templateUrl: './input-date-range-disabled-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiInputDateRangeDisabledExampleComponent implements OnInit {
  readonly value = new FormControl(
    new ZuiDayRange(new ZuiDay(2018, 2, 10), new ZuiDay(2018, 3, 20)),
  );
  readonly min = new ZuiDay(2000, 2, 20);

  readonly max = new ZuiDay(2040, 2, 20);

  public ngOnInit(): void {
    this.value.disable();
  }
}
