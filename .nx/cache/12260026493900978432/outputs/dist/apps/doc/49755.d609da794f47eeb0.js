'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [49755],
  {
    49755: n => {
      n.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { UntypedFormControl, Validators } from '@angular/forms';\nimport { PrizmInputValidationTexts } from '@prizm-ui/components';\nimport { InputValidationCustomTextsService } from './input-validation-custom-texts.service';\n\n@Component({\n  selector: 'prizm-input-validation-custom-example',\n  templateUrl: './input-validation-custom-example.component.html',\n  styleUrls: ['./input-validation-custom-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  providers: [\n    {\n      provide: PrizmInputValidationTexts,\n      useClass: InputValidationCustomTextsService,\n    },\n  ],\n})\nexport class InputValidationCustomExampleComponent {\n  public requiredInputControl = new UntypedFormControl('\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435', Validators.required);\n}\n";
    },
  },
]);
