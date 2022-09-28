import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ZuiCarouselYearMonth, ZuiCarouselZuiCarouselYearMonthValue } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-carousel-year-month-example',
  templateUrl: './carousel-year-month-example.component.html',
  styleUrls: ['./carousel-year-month-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiCarouselYearMonthExampleComponent {
  carouselContent = new ZuiCarouselYearMonth();
  currentValue: ZuiCarouselZuiCarouselYearMonthValue;

  constructor() {
    const currentDate = new Date();
    this.currentValue = { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1 };
  }
}

