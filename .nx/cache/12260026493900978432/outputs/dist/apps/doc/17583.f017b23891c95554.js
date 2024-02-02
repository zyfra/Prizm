'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [17583],
  {
    17583: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmTime } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-time-with-preset-example',\n  templateUrl: './input-time-with-preset-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputTimeWithPresetExampleComponent {\n  public readonly value = new UntypedFormControl(new PrizmTime(12, 30, 25, 500));\n  public readonly items = new Array(24).fill(null).map((_, i) => new PrizmTime(i, 0, 0, 0));\n}\n";
    },
  },
]);
