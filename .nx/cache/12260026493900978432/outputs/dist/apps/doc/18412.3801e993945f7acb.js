'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [18412],
  {
    18412: n => {
      n.exports =
        "import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';\nimport { PrizmMonth, PrizmMonthRange } from '@prizm-ui/components';\n\n@Component({\n  selector: `prizm-calendar-month-example-2`,\n  templateUrl: `./range.component.html`,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  encapsulation: ViewEncapsulation.Emulated,\n})\nexport class PrizmMonthExample2Component {\n  value: PrizmMonthRange | null = null;\n\n  max = new PrizmMonth(2021, 7);\n  min = new PrizmMonth(2019, 7);\n\n  public onMonthClick(month: PrizmMonth): void {\n    if (this.value === null || !this.value.isSingleMonth) {\n      this.value = new PrizmMonthRange(month, month);\n\n      return;\n    }\n\n    this.value = PrizmMonthRange.sort(this.value.from, month);\n  }\n}\n";
    },
  },
]);
