'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [34901],
  {
    34901: e => {
      e.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { PrizmDay, prizmGetInputDateRangeNativeTransformer } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-date-range-native-example',\n  templateUrl: './input-native-date-range-base-example.component.html',\n  providers: [prizmGetInputDateRangeNativeTransformer()],\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmInputNativeDateRangeBaseExampleComponent {\n  readonly value = new UntypedFormControl([new Date(2018, 2, 10), new Date(2018, 3, 20)]);\n}\n";
    },
  },
]);
