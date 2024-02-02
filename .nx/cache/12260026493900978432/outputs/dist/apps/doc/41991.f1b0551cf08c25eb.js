'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [41991],
  {
    41991: e => {
      e.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { FormControl, Validators } from '@angular/forms';\n\n@Component({\n  selector: 'prizm-textarea-basic-example',\n  templateUrl: './textarea-basic-example.component.html',\n  styleUrls: ['./textarea-basic-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TextareaBasicExampleComponent {\n  public value = new FormControl('222', [Validators.required, Validators.maxLength(10)]);\n}\n";
    },
  },
]);
