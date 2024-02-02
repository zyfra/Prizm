'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [17639],
  {
    17639: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmDay } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-date-base-example',\n  templateUrl: './date-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmDateBaseExampleComponent {\n  public readonly control = new UntypedFormControl(new PrizmDay(2017, 0, 15));\n}\n";
    },
  },
]);
