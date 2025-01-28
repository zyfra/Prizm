import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { PrizmYear } from '@prizm-ui/components';

@Component({
  selector: 'prizm-calendar-year-base-example',
  templateUrl: './base.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class PrizmCalendarYearBaseExampleComponent {
  value: PrizmYear | null = null;

  public onYearClick(month: PrizmYear): void {
    this.value = month;
  }
}
