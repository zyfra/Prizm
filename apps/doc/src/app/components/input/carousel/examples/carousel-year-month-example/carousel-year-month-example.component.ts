import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmCarouselYearMonth, PrizmCarouselPrizmCarouselYearMonthValue } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-carousel-year-month-example',
  templateUrl: './carousel-year-month-example.component.html',
  styleUrls: ['./carousel-year-month-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCarouselYearMonthExampleComponent {
  carouselContent = new PrizmCarouselYearMonth();
  currentValue: PrizmCarouselPrizmCarouselYearMonthValue;

  constructor() {
    const currentDate = new Date();
    this.currentValue = { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1 };
  }
}

