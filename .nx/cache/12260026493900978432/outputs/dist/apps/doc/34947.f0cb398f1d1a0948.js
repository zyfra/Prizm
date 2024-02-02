'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [34947],
  {
    34947: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl, Validators } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-select-validators-example',\n  templateUrl: './select-validators-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmSelectValidatorsExampleComponent {\n  value: string | null = null;\n  readonly items = [\n    'One',\n    'Two',\n    'Three',\n    'Very long text with a lot of characters and spaces and other stuff and things',\n  ];\n  readonly control = new UntypedFormControl(this.items[1], [Validators.required]);\n\n  public setDefaultValue(): void {\n    this.control.setValue(null);\n  }\n\n  public setRequiredValidator(): void {\n    this.control.setValidators([Validators.required]);\n  }\n\n  public clearValidator(): void {\n    this.control.setValidators([]);\n  }\n}\n";
    },
  },
]);
