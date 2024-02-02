'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [43390],
  {
    43390: n => {
      n.exports =
        "import { Component, OnInit } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-toggle-base-example',\n  templateUrl: './toggle-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmToggleBaseExampleComponent implements OnInit {\n  public value = true;\n  public readonly value2 = new UntypedFormControl(false);\n  public valueDisabled = false;\n  public readonly value2Disabled = new UntypedFormControl(false);\n\n  public ngOnInit(): void {\n    this.value2Disabled.disable();\n  }\n}\n";
    },
  },
]);
