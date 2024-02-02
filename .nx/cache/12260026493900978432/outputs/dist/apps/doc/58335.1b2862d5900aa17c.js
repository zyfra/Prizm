'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [58335],
  {
    58335: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmTime } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-layout-time-base-example',\n  templateUrl: './input-layout-time-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputLayoutTimeBaseExampleComponent {\n  public readonly time = new PrizmTime(12, 30);\n  public readonly value = new UntypedFormControl(this.time);\n}\n";
    },
  },
]);
