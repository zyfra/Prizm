'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [20520],
  {
    20520: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmDay, PrizmMonth, PrizmMonthRange } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-layout-month-range-base-example',\n  templateUrl: './input-layout-month-range-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputLayoutMonthRangeBaseExampleComponent {\n  public readonly control = new UntypedFormControl(\n    new PrizmMonthRange(new PrizmMonth(2022, 1), new PrizmMonth(2022, 3))\n  );\n}\n";
    },
  },
]);
