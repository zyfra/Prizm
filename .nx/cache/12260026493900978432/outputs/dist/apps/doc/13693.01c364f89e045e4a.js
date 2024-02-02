'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [13693],
  {
    13693: e => {
      e.exports =
        "import { Component, OnInit } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmDay, prizmGetInputDateTimeNativeTransformer, PrizmTime } from '@prizm-ui/components';\nimport { interval } from 'rxjs';\nimport { tap } from 'rxjs/operators';\n\n@Component({\n  selector: 'prizm-input-date-time-native-example',\n  templateUrl: './input-native-date-time-base-example.component.html',\n  providers: [prizmGetInputDateTimeNativeTransformer()],\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputDateTimeNativeExampleComponent {\n  public readonly value = new UntypedFormControl(new Date(2020, 0, 1, 13, 30, 0, 0));\n\n  public setDefaultValue(): void {\n    this.value.setValue(new Date());\n  }\n\n  public clear(): void {\n    this.value.setValue(null);\n  }\n}\n";
    },
  },
]);
