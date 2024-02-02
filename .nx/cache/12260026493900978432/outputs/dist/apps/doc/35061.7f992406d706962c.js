'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [35061],
  {
    35061: e => {
      e.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { prizmGetInputDateTimeRangeNativeTransformer } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-layout-date-time-range-native-example',\n  templateUrl: './input-native-date-time-range-base-example.component.html',\n  providers: [prizmGetInputDateTimeRangeNativeTransformer()],\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputNativeDateRangeBaseExampleComponent {\n  readonly value = new UntypedFormControl([new Date(2018, 2, 10), new Date(2018, 3, 20)]);\n}\n";
    },
  },
]);
