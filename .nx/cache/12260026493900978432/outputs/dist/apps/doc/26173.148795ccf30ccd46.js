'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [26173],
  {
    26173: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmTime } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-layout-time-with-ms-example',\n  templateUrl: './input-layout-time-with-ms-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputLayoutTimeWithMsExampleComponent {\n  public readonly value = new UntypedFormControl(new PrizmTime(12, 30, 25, 500));\n}\n";
    },
  },
]);
