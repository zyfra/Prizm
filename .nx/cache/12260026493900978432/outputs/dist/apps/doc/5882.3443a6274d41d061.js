'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [5882],
  {
    5882: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmDay, PrizmDayRange, PrizmDayRangePeriod } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-layout-date-range-list-example',\n  templateUrl: './input-layout-date-range-list-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputLayoutDateRangeListExampleComponent {\n  readonly value = new UntypedFormControl(\n    new PrizmDayRange(new PrizmDay(2018, 2, 10), new PrizmDay(2018, 3, 20))\n  );\n  readonly min = new PrizmDay(2000, 2, 20);\n\n  readonly max = new PrizmDay(2040, 2, 20);\n  readonly items = [\n    new PrizmDayRangePeriod(\n      new PrizmDayRange(new PrizmDay(2018, 1, 1), new PrizmDay(2019, 11, 31)),\n      '2018-2019'\n    ),\n    new PrizmDayRangePeriod(\n      new PrizmDayRange(new PrizmDay(2019, 1, 1), new PrizmDay(2020, 11, 31)),\n      '2019-2020'\n    ),\n  ];\n}\n";
    },
  },
]);
