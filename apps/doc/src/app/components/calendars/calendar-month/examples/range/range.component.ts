import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { PrizmMonth, PrizmMonthRange } from '@prizm-ui/components';

@Component({
  selector: `prizm-calendar-month-example-2`,
  templateUrl: `./range.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class PrizmMonthExample2Component {
  value: PrizmMonthRange | null = null;

  max = new PrizmMonth(2021, 7);
  min = new PrizmMonth(2019, 7);

  public onMonthClick(month: PrizmMonth): void {
    if (this.value === null || !this.value.isSingleMonth) {
      this.value = new PrizmMonthRange(month, month);

      return;
    }

    this.value = PrizmMonthRange.sort(this.value.from, month);
  }
}
