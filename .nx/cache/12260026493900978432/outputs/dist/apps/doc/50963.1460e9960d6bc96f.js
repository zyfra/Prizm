'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [50963],
  {
    50963: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-input-form-control-example',\n  templateUrl: './input-form-control-example.component.html',\n  styleUrls: ['./input-form-control-example.component.less'],\n})\nexport class InputFormControlExampleComponent {\n  public readonly control: UntypedFormControl = new UntypedFormControl();\n\n  public valueText = '';\n  public ngModelText = '';\n\n  public changeControl(): void {\n    this.control.setValue('New text control from method!');\n  }\n\n  public changeText(): void {\n    this.valueText = 'New text random text ' + Math.random();\n  }\n\n  public changeNgModel(): void {\n    this.ngModelText = 'New for ngModel';\n  }\n}\n";
    },
  },
]);
