'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [53931],
  {
    53931: n => {
      n.exports =
        "import { ChangeDetectionStrategy, Component } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-input-number-invalid-example',\n  templateUrl: './input-number-invalid-example.component.html',\n  styleUrls: ['./input-number-invalid-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class InputNumberInvalidExampleComponent {\n  form = new FormGroup({\n    number: new FormControl<number | null>(null),\n  });\n}\n";
    },
  },
]);
