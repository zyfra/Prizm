'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [11041],
  {
    11041: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmTime } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-time-base-example',\n  templateUrl: './input-time-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputTimeBaseExampleComponent {\n  public readonly time = new PrizmTime(12, 30);\n  public readonly value = new UntypedFormControl(this.time);\n}\n";
    },
  },
]);
