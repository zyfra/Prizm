import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { PrizmMonth } from '@prizm-ui/components';

@Component({
  selector: `prizm-calendar-month-example-1`,
  templateUrl: `./base.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class PrizmMonthExample1Component {
  value: PrizmMonth | null = null;
  hoveredMonth: PrizmMonth | null = null;

  public onMonthClick(month: PrizmMonth): void {
    this.value = month;
  }

  public onMonthHovered(month: PrizmMonth | null): void {
    this.hoveredMonth = month;
  }
}
