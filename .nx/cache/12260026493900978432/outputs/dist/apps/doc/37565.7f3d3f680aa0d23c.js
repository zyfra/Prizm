'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [37565],
  {
    37565: e => {
      e.exports =
        "import { ChangeDetectionStrategy, Component } from '@angular/core';\nimport { UntypedFormControl, Validators } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-input-number-basic-example',\n  templateUrl: './input-number-basic-example.component.html',\n  styleUrls: ['./input-number-basic-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class InputNumberBasicExampleComponent {\n  public requiredInputControl = new UntypedFormControl(2, Validators.required);\n}\n";
    },
  },
]);
