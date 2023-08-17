import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PrizmDateTimeRange, PrizmDay, PrizmDayRange, PrizmTime, PrizmTimeRange } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-date-time-range-form-group-example',
  templateUrl: './input-layout-date-time-range-form-group-example.component.html',
  styles: [
    `
      :host {
        --prizm-input-layout-width: 23rem;
      }

      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutDateTimeRangeFormGroupExampleComponent {
  formGroup = new FormGroup({
    period: new FormControl(
      this.toPrizmPeriod({
        from: null,
        to: null,
      })
    ),
  });

  private toPrizmPeriod(value: any): PrizmDateTimeRange {
    const now = new Date();
    const start = value.from ?? new Date(now.getFullYear() - 5, now.getMonth(), now.getDate());
    const end =
      value.to ??
      (value.from
        ? new Date(value.from.getFullYear() + 5, value.from.getMonth(), value.from.getDate())
        : new Date(now.getFullYear() + 5, now.getMonth(), now.getDate()));
    const fromDay = new PrizmDay(start.getFullYear(), start.getMonth(), start.getDate());
    const toDay = new PrizmDay(end.getFullYear(), end.getMonth(), end.getDate());
    const dayRange = new PrizmDayRange(fromDay, toDay);
    const fromTime = new PrizmTime(start.getHours(), start.getMinutes());
    const toTime = new PrizmTime(end.getHours(), end.getMinutes());
    const timeRange = new PrizmTimeRange(fromTime, toTime);
    return new PrizmDateTimeRange(dayRange, timeRange);
  }
}
