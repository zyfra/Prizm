import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmYear } from '@prizm-ui/components';

@Component({
  selector: 'prizm-calendar-year-custom-footer-example',
  templateUrl: './custom-footer-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      [prizmButton] {
        flex: 1;
      }
    `,
  ],
})
export class PrizmCalendarYearCustomFooterExampleComponent {
  value: PrizmYear | null = null;

  public onYearClick(year: PrizmYear): void {
    this.value = year;
  }

  public cancel(): void {
    this.value = null;
  }

  public setValue() {
    this.value = new PrizmYear(2023);
  }
}
