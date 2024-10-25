import { Component, DestroyRef, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmDateTime, PrizmDateTimeRange, PrizmDay, PrizmDayRange, PrizmTime } from '@prizm-ui/components';
import { tap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'prizm-input-layout-date-time-range-base-example',
  templateUrl: './input-layout-date-time-range-base-example.component.html',
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
export class PrizmInputLayoutDateTimeRangeBaseExampleComponent {
  readonly value = new FormControl(
    new PrizmDateTimeRange(new PrizmDayRange(new PrizmDay(2018, 2, 10), new PrizmDay(2018, 2, 10)))
  );

  public min: PrizmDateTime = new PrizmDateTime(new PrizmDay(2018, 1, 1), new PrizmTime(10, 0));
  public max: PrizmDateTime = new PrizmDateTime(new PrizmDay(2025, 10, 10), new PrizmTime(18, 30));
  private readonly destroy = inject(DestroyRef);
  ngOnInit() {
    this.value.valueChanges
      .pipe(
        tap(result => {
          console.log('valueChanges', result);
        }),
        takeUntilDestroyed(this.destroy)
      )
      .subscribe();
  }
}
