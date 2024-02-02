'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [56123],
  {
    56123: e => {
      e.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmDay, PrizmTime } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-layout-date-time-min-max-time-example',\n  templateUrl: './input-layout-date-time-min-max-time-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputLayoutDateTimeMinMaxTimeExampleComponent {\n  public readonly value = new UntypedFormControl([new PrizmDay(2022, 2, 15), new PrizmTime(12, 30)]);\n  public min: [PrizmDay, PrizmTime] = [new PrizmDay(2022, 1, 1), new PrizmTime(9, 0)];\n  public max: [PrizmDay, PrizmTime] = [new PrizmDay(2025, 10, 10), new PrizmTime(18, 30)];\n  public setDefaultValue(): void {\n    this.value.setValue([new PrizmDay(2022, 1, 1), new PrizmTime(6, 0)]);\n  }\n\n  public clear(): void {\n    this.value.setValue(null);\n  }\n}\n";
    },
  },
]);
