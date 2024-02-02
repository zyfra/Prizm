'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [27796],
  {
    27796: e => {
      e.exports =
        "import { Component, OnInit } from '@angular/core';\nimport { UntypedFormControl, Validators } from '@angular/forms';\nimport { PrizmSelectStringify } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-select-base-example',\n  templateUrl: './select-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmSelectBaseExampleComponent {\n  readonly items = [\n    'One',\n    'Two',\n    'Three',\n    'Very long text with a lot of characters and spaces and other stuff and things',\n  ];\n  readonly control = new UntypedFormControl(this.items[1], [Validators.required]);\n\n  public setDefaultValue(): void {\n    this.control.setValue(this.items[0], { emitEvent: false });\n  }\n}\n";
    },
  },
]);
