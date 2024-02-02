'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [45666],
  {
    45666: n => {
      n.exports =
        "import { Component, OnInit } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-select-with-template-example',\n  templateUrl: './select-with-template-example.component.html',\n  styles: [\n    `\n      .item {\n        display: flex;\n        gap: 0.5rem;\n      }\n    `,\n  ],\n})\nexport class PrizmSelectWithTemplateExampleComponent {\n  readonly items = ['\u041a\u0440\u0430\u0441\u043d\u044b\u0439', '\u0417\u0435\u043b\u0435\u043d\u044b\u0439', '\u0421\u0438\u043d\u0438\u0439'];\n  readonly control = new UntypedFormControl();\n\n  public getColor(item: string): string {\n    switch (item) {\n      case '\u041a\u0440\u0430\u0441\u043d\u044b\u0439':\n        return 'red';\n      case '\u0417\u0435\u043b\u0435\u043d\u044b\u0439':\n        return 'green';\n      case '\u0421\u0438\u043d\u0438\u0439':\n      default:\n        return 'blue';\n    }\n  }\n}\n";
    },
  },
]);
