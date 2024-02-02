'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [4299],
  {
    4299: e => {
      e.exports =
        "import { Component, OnInit } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-multi-select-with-template-example',\n  templateUrl: './multi-select-with-template-example.component.html',\n  styles: [\n    `\n      .item {\n        display: flex;\n        gap: 0.5rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputMultiSelectWithTemplateExampleComponent {\n  readonly items = ['One', 'Two', 'Three'];\n  readonly valueControl = new UntypedFormControl(['Two']);\n}\n";
    },
  },
]);
