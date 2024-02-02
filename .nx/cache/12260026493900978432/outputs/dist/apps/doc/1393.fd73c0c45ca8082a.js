'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [1393],
  {
    1393: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmTime } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-layout-time-with-seconds-example',\n  templateUrl: './input-layout-time-with-seconds-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputLayoutTimeWithSecondsExampleComponent {\n  public readonly value = new UntypedFormControl(new PrizmTime(12, 30, 25));\n}\n";
    },
  },
]);
