'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [54802],
  {
    54802: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmDay } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-month-range-base-example',\n  templateUrl: './input-month-range-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputMonthRangeBaseExampleComponent {\n  public readonly control = new UntypedFormControl(new PrizmDay(2017, 0, 15));\n}\n";
    },
  },
]);
