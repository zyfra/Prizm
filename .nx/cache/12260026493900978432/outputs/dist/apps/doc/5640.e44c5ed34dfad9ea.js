'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [5640],
  {
    5640: e => {
      e.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-input-disabled-example',\n  templateUrl: './input-disabled-example.component.html',\n  styleUrls: ['./input-disabled-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class InputDisabledExampleComponent {\n  public disabledInputControl = new UntypedFormControl({ value: '\u0417\u0430\u0434\u0438\u0437\u0430\u0439\u0431\u043b\u0435\u043d\u043e', disabled: true });\n}\n";
    },
  },
]);
