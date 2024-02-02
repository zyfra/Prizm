'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [55259],
  {
    55259: n => {
      n.exports =
        "import { Component, OnInit } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-multi-select-base-example',\n  templateUrl: './multi-select-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputMultiSelectBaseExampleComponent implements OnInit {\n  value = true;\n  readonly valueControl = new UntypedFormControl([]);\n  readonly items = [\n    'One',\n    'Two',\n    'Three',\n    'Very long text with a lot of characters and spaces and other stuff and things',\n  ];\n  readonly valueDisabled = new UntypedFormControl(false);\n\n  ngOnInit(): void {\n    this.valueDisabled.disable();\n  }\n\n  public setDefaultValue(): void {\n    this.valueControl.setValue([this.items[0]], { emitEvent: false });\n  }\n}\n";
    },
  },
]);
