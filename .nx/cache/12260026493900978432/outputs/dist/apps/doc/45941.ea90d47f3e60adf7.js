'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [45941],
  {
    45941: e => {
      e.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { PrizmInputCarouselYearMonth, PrizmInputCarouselYearMonthValue } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-carousel-year-month-example',\n  templateUrl: './carousel-year-month-example.component.html',\n  styleUrls: ['./carousel-year-month-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PrizmInputCarouselYearMonthExampleComponent {\n  carouselContent = new PrizmInputCarouselYearMonth();\n  currentValue: PrizmInputCarouselYearMonthValue;\n\n  constructor() {\n    const currentDate = new Date();\n    this.currentValue = { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1 };\n  }\n}\n";
    },
  },
]);
