'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [50552],
  {
    50552: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport { prizmGetInputDateNativeTransformer } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-input-native-date-base-example',\n  templateUrl: './date-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n  providers: [prizmGetInputDateNativeTransformer()],\n})\nexport class PrizmInputNativeDateBaseExampleComponent {\n  public readonly control = new UntypedFormControl(new Date());\n}\n";
    },
  },
]);
