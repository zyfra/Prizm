'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [4981],
  {
    4981: n => {
      n.exports =
        "import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmChipsComponent } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-chips-basic-example',\n  templateUrl: './input-chips-basic-example.component.html',\n  styleUrls: ['./input-chips-basic-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class InputChipsExampleBaseComponent {\n  public deletable = true;\n  public requiredInputControl = new UntypedFormControl('');\n  public chipsControl = new UntypedFormControl(['\u0427\u0438\u043f\u0441 1', '\u0427\u0438\u043f\u0441 2']);\n\n  @ViewChild(PrizmChipsComponent, { static: true }) chipsComponent!: PrizmChipsComponent;\n\n  public onEnter(value: string): void {\n    if (value === '') return;\n    this.chipsComponent.addChips(value);\n    this.requiredInputControl.patchValue('');\n  }\n}\n";
    },
  },
]);
