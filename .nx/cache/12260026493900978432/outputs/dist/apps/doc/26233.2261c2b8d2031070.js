'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [26233],
  {
    26233: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmDay } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-date-separate-example',\n  templateUrl: './date-range-separate-example.component.html',\n  styles: [\n    `\n      .block {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmDateSeparateExampleComponent {\n  public readonly fromControl = new UntypedFormControl(new PrizmDay(2022, 0, 15));\n  public readonly toControl = new UntypedFormControl(new PrizmDay(2022, 2, 15));\n}\n";
    },
  },
]);
