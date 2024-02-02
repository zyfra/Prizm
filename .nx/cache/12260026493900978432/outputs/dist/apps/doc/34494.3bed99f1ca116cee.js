'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [34494],
  {
    34494: e => {
      e.exports =
        "import { Component, OnInit } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-select-with-template-example',\n  templateUrl: './select-with-template-example.component.html',\n  styles: [\n    `\n      .item {\n        display: flex;\n        gap: 0.5rem;\n      }\n    `,\n  ],\n})\nexport class PrizmSelectWithTemplateExampleComponent {\n  readonly items = ['One', 'Two', 'Three'];\n  readonly control = new UntypedFormControl();\n}\n";
    },
  },
]);
