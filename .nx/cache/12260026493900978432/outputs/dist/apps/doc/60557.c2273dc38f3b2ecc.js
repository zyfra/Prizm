'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [60557],
  {
    60557: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl, Validators } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-multi-select-validators-example',\n  templateUrl: './multi-select-validators-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputMultiSelectValidatorsExampleComponent {\n  readonly valueControl = new UntypedFormControl([], [Validators.required]);\n  readonly items = [\n    'One',\n    'Two',\n    'Three',\n    'Very long text with a lot of characters and spaces and other stuff and things',\n  ];\n  public setDefaultValue(): void {\n    this.valueControl.setValue(null);\n  }\n\n  public setRequiredValidator(): void {\n    this.valueControl.setValidators([Validators.required]);\n  }\n\n  public clearValidator(): void {\n    this.valueControl.setValidators([]);\n  }\n}\n";
    },
  },
]);
