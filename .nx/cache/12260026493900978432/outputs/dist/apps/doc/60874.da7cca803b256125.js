'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [60874],
  {
    60874: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmTime } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-time-with-ms-example',\n  templateUrl: './input-time-with-ms-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputTimeWithMsExampleComponent {\n  public readonly value = new UntypedFormControl(new PrizmTime(12, 30, 25, 500));\n}\n";
    },
  },
]);
