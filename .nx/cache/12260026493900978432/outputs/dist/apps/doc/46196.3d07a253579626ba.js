'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [46196],
  {
    46196: e => {
      e.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { UntypedFormControl, Validators } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-input-number-counter-example',\n  templateUrl: './input-number-counter-example.component.html',\n  styleUrls: ['./input-number-counter-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class InputNumberCounterExampleComponent {\n  public requiredInputControl = new UntypedFormControl(2, Validators.required);\n}\n";
    },
  },
]);
