import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmDateTime, PrizmDateTimeRange, PrizmDay, PrizmDayRange, PrizmTime } from '@prizm-ui/components';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'prizm-input-layout-date-time-range-custom-time-picker-example',
  templateUrl: './input-layout-date-time-range-custom-time-picker-example.component.html',
  styles: [
    `
      :host {
        --prizm-input-layout-width: 23rem;
      }

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
export class PrizmInputLayoutDateTimeRangeCustomTimePickerExampleComponent implements OnInit {
  readonly control = new FormControl(
    new PrizmDateTimeRange(new PrizmDayRange(new PrizmDay(2018, 2, 10), new PrizmDay(2018, 2, 10)))
  );

  public min: PrizmDateTime = new PrizmDateTime(new PrizmDay(2018, 1, 1), new PrizmTime(10, 0));
  public max: PrizmDateTime = new PrizmDateTime(new PrizmDay(2029, 10, 10), new PrizmTime(18, 30));

  private readonly destroy = inject(DestroyRef);
  ngOnInit() {
    this.control.valueChanges
      .pipe(
        tap(result => {
          console.log('valueChanges', result);
        }),
        takeUntilDestroyed(this.destroy)
      )
      .subscribe();
  }

  public setDefaultValue(): void {
    this.control.setValue(
      new PrizmDateTimeRange(new PrizmDayRange(new PrizmDay(2028, 2, 10), new PrizmDay(2028, 4, 10)))
    );
  }

  public clear(): void {
    this.control.setValue(null);
  }
}
